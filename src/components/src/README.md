# The data is needed to be mapped.

-- The fields are empty and should be filled with data coming from the end point while considering the check for error boundary for object keys

## Implement the Object(Key) mapping. Like applicant - 2 has no data on first page. This has to do with the backend side. Model it as you'd like.

-- The existing approach is to have on handler for kinds check (DefaultRow.js,SingleRow.js,QuestionRow.js,SingleQuestionRow.js and TimeRow.js). It has very clean approach to do with the onChange handler.
