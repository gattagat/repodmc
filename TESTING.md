## Unit Frontend

- `brew install phantomjs`
- `gulp karma`

## E2E Frontend

## On first run
- `gulp webdriver-update`



## Protractor&Jasmine - Local dmc tests


---
#### Preconditions
Test configuration point to Google Chrome browser. Test works on Google Chrome v.77.0.3865.75 together with chromedriver with ver. 77.0.3865.40.

---

- Connect a device or start android emulator
- Run RethinkDb
  ```
    rethinkdb
  ```
- Run dmc
  ```
    ./bin/dmc local
  ```
  Wait till dmc will be fully functional and devices will be discovered
- Run tests
  ```
     gulp protractor
  ```

---
#### Info
Test results can be found in:
    test-results/reports-protractor/dashboardReport-protractor/index.html

---

## Multiple Browsers Local dmc with a specific suite
- Connect a device
- Run dmc
- `gulp protractor --multi --suite devices`

## Chrome Remote dmc
- `export dmc_URL='http://dmc-url/#!/'`
- `export dmc_USERNAME='user'`
- `export dmc_PASSWORD='pass'`
- `gulp protractor`
