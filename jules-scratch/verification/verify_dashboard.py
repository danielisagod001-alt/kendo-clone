import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    time.sleep(5)  # Add a 5-second delay
    page.goto("http://localhost:3001")
    page.screenshot(path="jules-scratch/verification/dashboard.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
