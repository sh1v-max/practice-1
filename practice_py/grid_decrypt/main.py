# this fetches raw html from the url, like browser loading a webpage but in python
import requests
# this is used to parse the html, it lets us easily find and extract specific elements like table, rows, and cells without manually searching through the string ourselves
from bs4 import BeautifulSoup

url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

table = soup.find('table')
rows = table.find_all('tr')

print(f"total rows found: {len(rows)}")
print("first row:", rows[0].text.strip())
print("second row:", rows[1].text.strip())