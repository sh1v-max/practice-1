import requests
import pandas as pd
from io import StringIO

def decode_secret_message(url):
    # fetch the page and read the table directly using pandas
    response = requests.get(url)
    response.encoding = 'utf-8'
    tables = pd.read_html(StringIO(response.text), header=0)
    df = tables[0]  # first table in the page

    # find grid dimensions
    max_x = df['x-coordinate'].max()
    max_y = df['y-coordinate'].max()

    # build empty grid filled with spaces
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # place each character in the right spot
    for _, row in df.iterrows():
        x = row['x-coordinate']
        char = row['Character']
        y = row['y-coordinate']
        grid[y][x] = char

    for row in grid:
        print(''.join(row))


decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")