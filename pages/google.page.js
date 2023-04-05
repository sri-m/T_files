const { expect } = require('@playwright/test');
class PracticeProjeect
{
    constructor(page)
    {
        this.page = page;
        this.enterText = '';
        this.clickBtn = '';
    }

    async open()
    {
        return await this.page.goto("https://www.saucedemo.com/");
        expect(3).toEqual(3);
    }
}

module.exports = {PracticeProjeect}