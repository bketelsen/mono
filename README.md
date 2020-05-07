# Life Hub Monorepo

## Content

Contains all the various content that feeds my internet presence.

## Scripts

Various processing scripts

### slides.js

processes /content/talks and puts resulting files in the static/ directory of brianketelsen.com

### shorttalks.js

creates shortcodes for all talks

### shortcodes.js 

creates shortcodes for all snacks

### short.js

creates persistent shortcodes unrelated to /content folder


## Sites

Consumers of /content.

### brianketelsen.com

main blog

### gatsbyweb

previous blog

### talks.brianketelsen.com 

lost implementation

### talks

experiment to view asciidoc files as 'slides' without any extra JS framework.

## Workers

CloudFlare Workers

### bjk.fyi

CF worker that processes redirects for shortecodes.
