const cheerio = require('cheerio');

async function decodeSecretMessage(url) {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    // extract rows from the table, skip the header
    const data = [];
    $('table tr').slice(1).each((_, row) => {
        const cols = $(row).find('td');
        if (cols.length === 3) {
            const x = parseInt($(cols[0]).text().trim());
            const char = $(cols[1]).text().trim();
            const y = parseInt($(cols[2]).text().trim());
            data.push({ x, y, char });
        }
    });

    // figure out grid size
    const maxX = Math.max(...data.map(d => d.x));
    const maxY = Math.max(...data.map(d => d.y));

    // build empty grid filled with spaces
    const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));

    // place each character at its coordinates
    for (const { x, y, char } of data) {
        grid[y][x] = char;
    }

    // print each row
    for (const row of grid) {
        console.log(row.join(''));
    }
}

decodeSecretMessage(
    'https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub'
);
