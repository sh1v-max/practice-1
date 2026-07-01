# this fetches raw html from the url, like browser loading a webpage but in python
import requests
# this is used to parse the html, it lets us easily find and extract specific elements like table, rows, and cells without manually searching through the string ourselves
from bs4 import BeautifulSoup

url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

table = soup.find('table')
# finding all the rows
rows = table.find_all('tr')

# .text extracts just the text content from the HTML tags, .strip() removes extra whitespace
print(f"total rows found: {len(rows)}")
print("first row:", rows[0].text.strip())
print("second row:", rows[1].text.strip())

data = []
for row in rows[1:]:  # skip header row
    cols = row.find_all('td')
    if len(cols) == 3:
        x = int(cols[0].text.strip())
        char = cols[1].text.strip()
        y = int(cols[2].text.strip())
        data.append((x, y, char))

print(f"total data points: {len(data)}")
print("first 3 entries:", data[:3])

# find the grid dimensions
max_x = max(d[0] for d in data)
max_y = max(d[1] for d in data)

print(f"grid size: {max_x + 1} wide x {max_y + 1} tall")

# build empty grid filled with spaces
grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

# place each character at its correct position
for x, y, char in data:
    grid[y][x] = char

print("grid built successfully!")
print(f"number of rows in grid: {len(grid)}")

# print each row of the grid
for row in grid:
    print(''.join(row))

# this function decodes the secret message
print("decoding secret message...")
def decode_secret_message(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    table = soup.find('table')
    rows = table.find_all('tr')

    data = []
    for row in rows[1:]:  # skip header row
        cols = row.find_all('td')
        if len(cols) == 3:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            data.append((x, y, char))

    max_x = max(d[0] for d in data)
    max_y = max(d[1] for d in data)

    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    for x, y, char in data:
        grid[y][x] = char

    for row in grid:
        print(''.join(row))


# call the function
decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")