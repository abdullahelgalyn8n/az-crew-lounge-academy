import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateEligibility } from './eligibility';

test('ideal candidate scores excellent and is eligible', () => {
  const result = evaluateEligibility({
    gender: 'female',
    heightCm: 168,
    age: 22,
    englishLevel: 'fluent',
    hasHighSchoolDiploma: true,
    visibleTattoos: false,
    swimmingAbility: 'yes',
  });

  assert.equal(result.isEligible, true);
  assert.equal(result.status, 'excellent');
  assert.ok(result.score >= 90);
  assert.equal(result.recommendedCourse, '3-month');
});

test('candidate with basic English is recommended 1-year course', () => {
  const result = evaluateEligibility({
    gender: 'female',
    heightCm: 165,
    age: 20,
    englishLevel: 'basic',
    hasHighSchoolDiploma: true,
    visibleTattoos: false,
    swimmingAbility: 'basic',
  });

  assert.equal(result.isEligible, true);
  assert.equal(result.recommendedCourse, '1-year');
});

test('candidate below minimum height is flagged as not eligible or needs preparation', () => {
  const result = evaluateEligibility({
    gender: 'female',
    heightCm: 152,
    age: 21,
    englishLevel: 'intermediate',
    hasHighSchoolDiploma: true,
    visibleTattoos: false,
    swimmingAbility: 'yes',
  });

  assert.equal(result.isEligible, false);
  assert.equal(result.status, 'not-eligible');
});

test('candidate without high school diploma is not eligible', () => {
  const result = evaluateEligibility({
    gender: 'male',
    heightCm: 175,
    age: 19,
    englishLevel: 'fluent',
    hasHighSchoolDiploma: false,
    visibleTattoos: false,
    swimmingAbility: 'yes',
  });

  assert.equal(result.isEligible, false);
  assert.equal(result.status, 'not-eligible');
});
