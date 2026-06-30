<div align="center">

<a href="https://learnsolace.org">![SOLace logo](https://github.com/user-attachments/assets/7b556c46-9019-431a-ab1e-b9d86c24a7bc)</a>
<a href="https://www.instagram.com/learnsolace/"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/097d0b23dcc0d22ba7710f6c113fafd321624a79/medium/filled/instagram.svg" alt="Instagram"></a>
<a href="https://www.facebook.com/share/1WwFmGxD3H/?mibextid=wwXIfr"><img src="https://raw.githubusercontent.com/CLorant/readme-social-icons/097d0b23dcc0d22ba7710f6c113fafd321624a79/medium/filled/facebook.svg" alt="Facebook"></a>
[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](https://github.com/search?q=repo%3Aiicebergg%2FSOLace++language%3AHTML&type=code)
[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](https://github.com/search?q=repo%3Aiicebergg%2FSOLace++language%3ACSS&type=code)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://github.com/search?q=repo%3Aiicebergg%2FSOLace++language%3AJavaScript&type=code)
[![Neon](https://img.shields.io/badge/Neon_Postgres-%23316192.svg?logo=neon&logoColor=white&color=34D59A)](https://neon.com/)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](https://vercel.com/home)
[![Donate](https://img.shields.io/badge/%E2%99%A1_Donate-white?style=flat&color=%23496ca3)](https://donorbox.org/solace-787440)

</div>

A simple, non-profit web app to help K-12 students in the Commonwealth of Virginia study for VDOE Standards of Learning Assessments.

## What is SOLace?
[SOLace](https://learnsolace.org/) is a test practice and preparation software developed by Vivien Berg, a high school student in the Commonwealth of Virginia. SOLace is aimed to help students in the Commonwealth of Virginia study for Standards of Learning tests, or SOLs. More information about SOLace's mission and goals can be found on our official [About](https://learnsolace.org/about.html) page.

## Why should I use SOLace?
SOLace boasts a number of benefits compared to existing SOL practice websites:
1. SOLace is made specifically for Virginia SOL practice and uses official Virginia Department of Education resources to give students the most up-to-date, refined pool of practice questions possible.
2. SOLace features a clean, easy-to-navigate interface and design layout that is intuitive and welcoming to students of all ages.
3. SOLace contains accessibility features such as color themes, magnifiers, and line readers that emulate the accomodations provided in official testing software.
4. SOLace provides advanced insights into student performance including time spent on tests, score improvement over time, and what questions specifically were missed.
5. SOLace is 100% free to use. There are no subscriptions, ads, or other forms of monetization on the website. [Voluntary donation](https://donorbox.org/solace-787440) is the only way SOLace can receive money.

## Getting Started

### Authentication and Setup
SOLace has no user logins. Instead, all test data is stored in the cache on the user's device in their browser. 

No setup is necessary before taking a test on SOLace; navigate the site using the directions below to begin your first test.

### Taking a Test
1. On the [SOLace home page](https://learnsolace.org/index.html), scroll down to the **Tests** header and click on the **Start ____ Tests** button for the type of test you would like to take.
2. You will be directed to a page listing all of the different grade levels or courses for each category of test. Select the grade level of the test you would like to take.
3. If you are taking a **Science** test, you will be immediately directed to the testing page. If you are taking a **Reading** or **Math** test, you will see bulleted links to tests organized into **Released Tests**, **Practice Item Sets**, and **Reporting Categories**. This method of categorization distinguishes different VDOE question sets from one another.
   1. **Released Tests** are full-length SOLs that were administered in a past year.
   2. **Practice Item Sets** are sets of questions made specifically for practice.
   3. **Reporting Categories** are broad topics tested throughout the Standards of Learning tests. The practice tests under this category contain both Released Test and Practice Item Set questions that fall under the Reporting Category selected.
4. Click the link to the practice test you would like to take. You will now arrive at the testing page.
5. Click on the blue **Start New Test** button.
6. Begin your test. A progress bar will be visible throughout the test, showing you what question you are on out of how many questions total there are in the test. You will receive feedback immediately after your answer is submitted, showing the correct answer and an explanation as to why that answer is correct.
7. When you are ready to submit your answer to the final question, click the "Submit Answer" button to view your final results.

### Viewing Results
SOLace has a results view that displays many pieces of data about performance:
* Percentage of questions answered correctly
* Time and date the test was completed
* The total number of times you have taken the test
* The average score of all times you have taken the test
* The best score of all times you have taken the test
* The time spent taking the test
* **Total Scaled Score*** (if applicable)

*The **Total Scaled Score** is a score taken out of 600 used by the Virginia Department of Education. The score conversions have been released on *some* Released Tests and are available on SOLace when they are released. According to the VDOE:
* A score of 600 is a **Pass Perfect**.
* A score ≥500 is a **Pass Advanced**.
* A score ≥400 is a **Pass Proficient**.
* A score <400 is **Not Passing**.

Below, you will see a list titled **Recent Test History**. This will display the last 50 made attempts on this test with an option to **View Details**. Upon clicking **View Details**, a grid will open up showing all the questions that were answered correctly and incorrectly on the test. Clicking on a question will expand the question's details, including your answer, the correct answer, and the explanation.

**IMPORTANT NOTE:** Because SOLace stores data locally in the user's browser, clearing the browser's cache can result in data loss. Lost test data cannot be retrieved.

### Accessibility Features
SOLace has several accessibility features that make the site easier to use for students who require them. The available features on SOLace mirror those that appear in Pearson's TestNav software during official SOL administration. These accessibility features include:
* Color themes (includes **Black on White** (default), **Black on Cream**, **Black on Light Blue**, **Black on Light Magenta**, **White on Black**, **Yellow on Blue**, and **Gray on Green** to maintain accuracy to official software)
* Adjustable text size
* A draggable screen magnifier
* A line reader mask

## Teacher Class Feature

SOLace offers an optional class management feature for teachers. Teachers create a password-protected account, set up a class, and students join with a six-character code. The feature provides aggregate progress tracking per seat.

### Seat-Token Model and the Name-Isolation Rule

**This rule is a hard architectural constraint. Do not weaken it.**

SOLace servers must never receive, store, log, or transmit a student's real name or any other student PII. The only per-student value the server ever sees is a neutral seat token (e.g., "Seat 14"). Real names are allowed in exactly one place: the teacher's browser `localStorage`, as a local name-to-token map. That map is never sent to SOLace in any form.

Concrete rules for contributors:

- **No name column anywhere in the schema.** The `classes`, `seat_tokens`, and `class_attempt_links` tables have no `first_name`, `last_name`, `student_name`, `display_name`, `full_name`, or equivalent column. Do not add one.
- **No name field in any network request.** No SOLace API endpoint may accept a name field in its body, query string, or headers. The Zod schemas on every endpoint use `.strict()` and an explicit name-field blocklist to enforce this. If you add a new endpoint that touches class or seat data, apply the same blocklist.
- **Name entry occurs on the teacher's device only.** The `getRosterMap()` / `saveRosterMap()` helpers in `public/js/teacher-class.js` manage the local name map. Names are joined with server seat tokens at render time and never included in any `fetch()` call.
- **Do not implement client-side-encrypted name sync.** Even encrypted, names in transit or on the server violate the spirit of this constraint and add complexity with no benefit given the existing localStorage approach.

The XSS risk on the teacher's own origin is the only residual exposure vector for local name data. The `Content-Security-Policy: script-src 'self'` header in `vercel.json` is the primary control. Keep it tight; do not relax it to allow inline scripts or third-party CDN scripts.

### Architecture Overview

```
api/_auth.js          — Better Auth singleton (argon2id, HIBP, TOTP, SendGrid email)
api/_middleware.js    — requireTeacher(), RLS context (set_config per transaction)
api/auth/[...all].js  — Better Auth catch-all handler
api/classes.js        — GET list, POST create (teacher-authenticated)
api/classes/join.js   — POST validate join code (public, rate-limited)
api/classes/[id].js   — PATCH rename/archive
api/classes/[id]/seats.js            — POST bulk-create seat tokens
api/classes/[id]/regenerate-code.js  — POST new join code
api/classes/[id]/progress.js         — GET per-seat aggregate progress

public/teacher/login.html    — sign in / sign up / TOTP flow
public/teacher/dashboard.html — class list
public/teacher/class.html    — roster, progress, settings tabs + kiosk mode
public/join.html             — student join flow (code → seat picker → confirm)

migrations/002_class_tables.sql — classes, seat_tokens, class_attempt_links, RLS
```

Row-level security (Postgres RLS) ensures one teacher cannot read another teacher's data even if the application-layer ownership check is bypassed. Every teacher API call sets `app.current_teacher_id` via `set_config(..., true)` inside a transaction before querying.

### Running the Test Suite

```bash
# Requires DATABASE_URL and TEST_BASE_URL (pointing at a running preview server)
node --test tests/*.test.js
```

Test files:
- `rls-isolation.test.js` — cross-teacher data isolation via RLS
- `name-isolation.test.js` — no name columns in schema, all endpoints reject name fields
- `join-flow.test.js` — valid/bad/expired codes, attempt linking
- `password-policy.test.js` — NIST length rules, HIBP breach check
- `rate-limit.test.js` — 429 after threshold on sign-in and join endpoints
- `attempt-backward-compat.test.js` — anonymous path unchanged

### Environment Variables

See `.env.example` for required variables. At minimum: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `SENDGRID_API_KEY`, `FROM_EMAIL`, `ALLOWED_ORIGIN`, `NODE_ENV`.

### Data Retention

Class-tagged `class_attempt_links` rows are deleted 365 days after the associated class is archived or deleted. Anonymous attempts (no class) are retained up to 24 months. The deletion schedule is documented in the privacy policy and is a planned post-MVP automation task.

## Copyright Notice
SOLace's source code is licensed under the CC BY-NC-SA 4.0 license. It contains adapted content that is copyrighted by the Virginia Department of Education. **All source code is licensed under CC BY-NC-SA 4.0, but the material of the questions themselves is not.** Official VDOE questions are credited with the following acknowledgement:
> Adapted from “*Source Name*” © Commonwealth of Virginia Department of Education. All rights reserved. Reproduced by permission.
