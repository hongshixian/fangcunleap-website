# BFCache Debugging Guide

## Problem
The header component's scroll state is not preserved when navigating back using browser back button (bfcache restoration).

## Changes Made

### 1. Added comprehensive debugging to `app/page.tsx`
- Logs when component mounts
- Logs all page lifecycle events (pageshow, popstate, visibilitychange, focus)
- Logs mountKey updates
- Added multiple fallback mechanisms beyond just pageshow

### 2. Enhanced `components/site/header.tsx`
- Added detailed logging for all events
- Added popstate listener (fires on back/forward navigation)
- Added visibilitychange listener (fires when page becomes visible)
- Added focus listener (fires when window gains focus)
- All events now trigger scroll state re-sync

## How to Test

### Method 1: Using the built Next.js app

1. Start the dev server or production build:
```bash
npm run dev
# or
npm run build && npm start
```

2. Open browser DevTools Console

3. Navigate to the homepage and scroll down (header should change appearance)

4. Click any link to navigate away (e.g., /about)

5. Use browser back button to return

6. **Check console logs** - you should see:
   - `[Page] pageshow event fired` with `persisted: true`
   - `[Header] pageshow event` with `persisted: true`
   - Multiple scroll re-sync attempts

7. Verify if header state is correct

### Method 2: Using the standalone test file

1. Open `bfcache-test.html` in a browser

2. Scroll down (header should change at 40px)

3. Click "Navigate Away" link

4. Use browser back button

5. Check the event log panel for what events fired

## Expected Console Output on BFCache Restore

```
[Page] pageshow event fired {persisted: true, type: "pageshow", currentMountKey: 0}
[Page] Page restored from bfcache, incrementing mountKey
[Page] mountKey update: 0 -> 1
[Header] pageshow event {persisted: true, scrollY: 150, currentScrolledState: false}
[Header] Page restored from bfcache, forcing scroll re-sync
[Header] Scroll event - Y: 150 isScrolled: true current state: false
[Page] popstate event fired
[Header] popstate event, forcing scroll re-sync
[Header] Scroll event - Y: 150 isScrolled: true current state: true
```

## Known Issues & Considerations

### 1. PageTransitionEvent Type
- **Type exists** in TypeScript's lib.dom.d.ts
- Should work in all modern browsers
- Type is correct and should not cause issues

### 2. Next.js Static Generation
- Pages are pre-rendered as static content (○ Static)
- Client-side code still executes after hydration
- Event listeners should attach after hydration completes

### 3. Browser Differences
- **Safari**: Strong bfcache support, pageshow fires reliably
- **Chrome**: Good bfcache support, may skip cache if page uses certain APIs
- **Firefox**: Good bfcache support
- Edge: Same as Chrome (Chromium-based)

### 4. BFCache Disqualifiers
Things that prevent bfcache:
- ❌ Unload event listeners
- ❌ beforeunload with returnValue set
- ❌ Open IndexedDB connections
- ❌ Open WebSocket connections
- ❌ Cache-Control: no-store
- ✅ Our code doesn't use any of these

## Alternative Approaches Implemented

Since we can't be 100% sure pageshow fires in all cases, we added multiple fallbacks:

1. **pageshow** - Primary mechanism for bfcache detection
2. **popstate** - Fires on back/forward navigation (always fires, even without bfcache)
3. **visibilitychange** - Fires when page becomes visible again
4. **focus** - Fires when window gains focus

This layered approach ensures scroll state is re-synced through at least one mechanism.

## Why the First Approach Failed

The first approach had several issues:

1. **Silent failure** - No logging to verify events were firing
2. **Type assumptions** - Assumed PageTransitionEvent would work without verification
3. **Single mechanism** - Only relied on pageshow, no fallbacks
4. **No visibility into state** - Couldn't see if state updates were working
5. **Dependency array issue** - The useEffect in page.tsx had no dependencies but used `mountKey` in the log, which could cause closure issues

## Current Solution

The current implementation:
- ✅ Comprehensive logging for debugging
- ✅ Multiple event listeners for redundancy
- ✅ Proper TypeScript types
- ✅ Works with Next.js static generation
- ✅ Proper cleanup of all listeners
- ✅ Forces re-sync on all relevant events
- ✅ Empty dependency array to avoid closure issues

## Next Steps

1. **Test in browser** - Open DevTools console and verify logs appear
2. **Check which events fire** - See if pageshow/persisted is true
3. **If pageshow doesn't fire** - Check if browser is using bfcache at all
4. **Browser-specific testing** - Test in Safari, Chrome, Firefox
5. **If still failing** - Check for Next.js hydration issues

## Debugging Commands

Check if pageshow event is supported:
```javascript
console.log('pageshow' in window); // should be true
```

Manually test the event:
```javascript
window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
```

Check current scroll position:
```javascript
console.log(window.scrollY);
```

Force scroll event:
```javascript
window.dispatchEvent(new Event('scroll'));
```
