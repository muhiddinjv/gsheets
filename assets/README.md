Pre-requisite:
- Study [n8n.io](https://n8n.io/), [docs.n8n.io](https://docs.n8n.io/#about-n8n).
    - [x] read n8n documentation
    - [x] watch some youtube videos
    - [x] try some ready templates
    - [ ] explore executions
    - [ ] learn how n8n expressions work.
- You will be given google service-account, with write access to this (https://docs.google.com/spreadsheets/d/1gyrULINgsv_z0Kzs0InW1Zyq97HecrIsdUIbayetJ78/edit?usp=sharing) google sheet

Task:
Make a web page, which will allow any users to book a meeting and write data to google sheet using your frontend skills and n8n workflows.

Requirements:
1. make a small HTML/CSS app with 3 inputs (10 points):
    - [ ] Name (text)
    - [ ] Description (text)
    - [ ] Date Time (datetime-local)
    PS: simple html app with script tags will be enough
2. Setup n8n:
    - [x] 2.1 Install nodejs, run npx n8n and open browser (3 points)
    - [x] 2.2 Import attached workflow file (3 points)
    - [x] 2.3 Create credential. Use attached service account credentials json (4 points)

To validate that setup has been done correctly:
- [x] open workflow
- [x] run "Set" and "Google Sheets" nodes (see attached screenshot)
- [x] after that you should see data from "Set" node data appear in this [Google Sheet](https://docs.google.com/spreadsheets/d/1gyrULINgsv_z0Kzs0InW1Zyq97HecrIsdUIbayetJ78/edit#gid=0)

3. Connect or replace  "Set" node with "Webhook trigger" and make Google Sheet node receive dynamic data from webhook (20 points). 

Learn how to use n8n expressions and explore executions to understand how to access body or query params from webhook. You can use any third party http client tool for triiggering webhook. I recommend using insomnia.rest for learning how n8n webhooks work.

4. Add Javascript logic to your web page:
   - [ ] 4.1 On button clicked, validate inputs are not empty, show errors otherwise (5 points)
   - [ ] 4.2 If validation passes, then using any http client send data to n8n Webhook which then transfers it to Google Sheet (5 points)

Total 50 points.

At the end, connect 3 and 4 together, you should have something similar to this (https://davron-proj2.dev.beta.thezeroone.io/).
To confirm, that your workflow is creating correctly, you can view this (https://docs.google.com/spreadsheets/d/1gyrULINgsv_z0Kzs0InW1Zyq97HecrIsdUIbayetJ78/edit#gid=0) sheet.

PS: data in google sheet gets cleaned up every 5 minutes