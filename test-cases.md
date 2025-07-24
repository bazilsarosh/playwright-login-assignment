# Test Cases for Login Functionality

# Positive Test Cases
| TC No. | Test Case Description                                           | Input Username | Input Password | Expected Result                           |
| ------ | --------------------------------------------------------------- | -------------- | -------------- | ----------------------------------------- |
| TC01   | Login with valid credentials                                    | `student`      | `Password123`  | User should be redirected to success page |
| TC02   | Login after page refresh with valid credentials                 | `student`      | `Password123`  | Successful login after page refresh       |
| TC03   | Login after logging out and logging in again                    | `student`      | `Password123`  | Successful login after logout             |
| TC04   | Login using Tab & Enter key instead of button	                 | `student`      | `Password123`  | User should be redirected to success page |
| TC05   | Login with proper case-sensitive credentials	                   | `student`      | `Password123`  | Successful Login (case matches exactly)   |

# Negative Test Cases
| TC No. | Test Case Description                                           | Input Username | Input Password | Expected Result                           |
| ------ | --------------------------------------------------------------- | -------------- | -------------- | ----------------------------------------- |
| TC06   | Login with incorrect username                                   | `wronguser`    | `Password123`  | Error message should appear               |
| TC07   | Login with incorrect password                                   | `student`      | `wrongpass`    | Error message should appear               |
| TC08   | Login with both fields empty                                    | (empty)        | (empty)        | Error message should appear               |
| TC09   | Login with only username                                        | `student`      | (empty)        | Error message should appear               |
| TC10   | Login with uppercase username (case mismatch)	                 | `STUDENT`      | `Password123`  | Error message should appear               |     
