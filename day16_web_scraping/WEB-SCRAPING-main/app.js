const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
app.listen(port, async () => {
  try {
    console.log(`listening port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
const totalData = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.google.com/search?q=react+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#htivrt=jobs&htidocid=DNXJc0LPw_4AAAAAAAAAAA%3D%3D&fpstate=tldetail"
  );

  const Details = await page.evaluate(() => {
    var res = [];
    const data = document.querySelectorAll(
      ".iFjolb.gws-plugins-horizon-jobs__li-ed"
    );
    data.forEach((el) => {
      let name = el.querySelector(".BjJfJf.PUpOsf").innerHTML;
      let company = el.querySelector(".vNEEBe").innerHTML;
      let description = el.querySelector(".HBvzbc").textContent;
      let location = el.querySelector(".Qk80Jf").innerHTML;
      res.push({ name, company, location, description });
    });
    return res;
  });

    await browser.close();
    return Details
};



app.get("/", async (req, res) => {
    try {
      const data = await totalData()
      return res.status(200).send(data);
    } catch (error) {
      console.log(error);
    }
  });