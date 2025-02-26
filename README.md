# Playwright UI Test Project Setup

1. Clone the repository:
   git clone https://github.com/sergeiz-bit/playwright-ui.git

2. Install dependencies:
   npm install
  
3. Install Playwright browsers:
   npx playwright install 

4. Add Environment Variables:
   Pass the application APP_URL through environment variables in Command Prompt:
   set APP_URL=https://fe-delivery.tallinn-learning.ee/signin

5. Run Tests:
   npx playwright test tests/Login.spec.ts
    



