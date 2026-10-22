import test from 'node:test';
import assert from 'node:assert/strict';
import { resolvePageFromUrl, PAGE_ROUTES } from './router';

test('resolves standard pathnames correctly', () => {
  assert.equal(resolvePageFromUrl('/'), 'home');
  assert.equal(resolvePageFromUrl('/about'), 'about');
  assert.equal(resolvePageFromUrl('/services'), 'services');
  assert.equal(resolvePageFromUrl('/gallery/photos'), 'gallery-photos');
  assert.equal(resolvePageFromUrl('/gallery/videos'), 'gallery-videos');
  assert.equal(resolvePageFromUrl('/contact'), 'contact');
});

test('handles trailing slashes and aliases', () => {
  assert.equal(resolvePageFromUrl('/about/'), 'about');
  assert.equal(resolvePageFromUrl('/contact-us'), 'contact');
  assert.equal(resolvePageFromUrl('/courses'), 'services');
  assert.equal(resolvePageFromUrl('/photos'), 'gallery-photos');
  assert.equal(resolvePageFromUrl('/videos'), 'gallery-videos');
});

test('resolves hash routing fallbacks', () => {
  assert.equal(resolvePageFromUrl('/', '#about'), 'about');
  assert.equal(resolvePageFromUrl('/', '#/services'), 'services');
  assert.equal(resolvePageFromUrl('/', '#contact'), 'contact');
});

test('resolves query parameter fallback', () => {
  assert.equal(resolvePageFromUrl('/', '', '?page=contact'), 'contact');
  assert.equal(resolvePageFromUrl('/', '', '?page=services'), 'services');
});
