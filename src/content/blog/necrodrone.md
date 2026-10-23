---
title: "Necrodrone"
description: "A drone synthesizer for Android, built for black metal. [one-line hook goes here]"
pubDate: 2026-10-23
tags: ["necrodrone", "android", "synth", "black-metal"]
draft: false
---

<!--
  TEMPLATE — replace every [bracketed prompt] with your own words, delete what you don't need.
  Facts below are pulled from the repo README so the skeleton isn't empty; rewrite freely.
-->

[Opening paragraph: what NECRODRONE is, in your voice. Why a phone? Why drone? What were you trying to make it sound like?]

> A drone synth, not a drone and a synth. The keys complement the drone; the drone engine is what you shape and edit.

## Why I built it

[The itch: what you were playing / recording, what existing apps got wrong, the moment you decided to write your own.]

## What it sounds like

[Describe the sound. Walls of detuned saws, cold filters, broken fuzz, tape delay, endless reverb — but say it how you'd say it.]

[Embed a recording here — e.g. an audio file in `public/audio/` or a Bandcamp/SoundCloud link.]

Some of the 25 drone presets:

| Preset | Character |
|---|---|
| FUNERAL FOG | Low, slow saws through a ladder filter that breathes open and shut |
| TRITONE RITE | Root, tritone, octave and a minor 2nd grinding through fuzz and warped tape echoes |
| NECROPOLIS WIND | Mostly noise: wind howling through a wandering resonant band-pass |
| GUITAR SHROUD | No synth at all — your guitar or voice into endless delay and reverb |

[Pick your favorites, or cut the table.]

## Playing it

[How it feels to use: the PLAY tab, the two performance sliders, pads locked to the drone's key, the keys layer on top. Every control is a horizontal slider — drag from anywhere, double-tap to reset, long-press to MIDI-learn.]

[Screenshot: drop it in `public/images/` and reference it as `![PLAY tab](/images/necrodrone-play.png)`.]

## Recording to tape

[The demo-tape angle: phone → USB-C adapter → 4-track or cassette deck. MONO, LOW CUT, STEADY, and the 1 kHz test tone for setting levels. What have you recorded with it?]

## Under the hood

[How deep to go is up to you. The short version:]

- Native C++ audio engine on Oboe, Jetpack Compose UI
- 6 drone voices + an 8-voice keys layer
- Ladder, state-variable and vowel formant filters
- FX chain: distortion › bitcrush › chorus › tape delay › FDN reverb (up to ~60 s) with shimmer
- Looper with fade, wear, half speed, reverse; granular freeze
- USB/Bluetooth MIDI with learn on any control

[What was hard? What surprised you? Anything you'd do differently?]

## Get it

[Android 8.0+. Grab the latest APK from the releases page, or build it yourself.]

- [[source on github]](https://github.com/devin-hart/necrodrone)
- [[releases]](https://github.com/devin-hart/necrodrone/releases)

[Sign-off.]
