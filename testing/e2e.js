const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();

  await page.goto("https://namastedev.com");

  console.log("Webpage Loaded");

  await page.setViewport({ width: 1620, height: 1080 });

  console.log("Courses Page Loaded");

  const enrollButton = ".bg-success-btn";
  await page.waitForSelector(enrollButton);

  await page.click(enrollButton);

    // Select the element using its class and get its text content
  const elementText = await page.$eval('.test-class', el => el.textContent);

  // Assert the value
  if (elementText === 'Expected Value') {
    console.log('Test passed');
  } else {
    console.log('Test failed');
  }

  await browser.close();
})();

// HomeWork:
// Automate whole user journey
// Run this sript everyday at 08:00 AM - CRON job
// Collect all the logs and erorrs send it to email - Amazon SES
