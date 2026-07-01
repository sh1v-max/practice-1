import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    # fetch the page
    response = requests.get(url)
    parsed = BeautifulSoup(response.text, 'html.parser')

    # grab the table and all its rows
    table = parsed.find('table')
    rows = table.find_all('tr')

    # loop through rows, skip the header, extract x, y and char
    data = []
    for row in rows[1:]:
        cols = row.find_all('td')
        if len(cols) == 3:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            data.append((x, y, char))

    # figure out how big the grid needs to be
    max_x = max(d[0] for d in data)
    max_y = max(d[1] for d in data)

    # build empty grid filled with spaces
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # place each character in the right spot
    for x, y, char in data:
        grid[y][x] = char

    # print it out
    for row in grid:
        print(''.join(row))


decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")