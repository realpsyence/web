#### AD9914 Signal Generator 

  The first board to design is the main board, which will house the DDS itself.

**TO-DO**:

  - board outline in altium to match PA3AKE's overall size and major component
    placement (see e.g. [Audio Board](http://martein.home.xs4all.nl/pa3ake/hmode/audio_amps.html))
  - rough schematic with AD9914 and ADCLK905, SMA connectors and passives, no power yet
    - do this in Altium first, since time-limited
  - choose connectors for sub modules
    - power (Vin, Vout, Gnd, i2c?)
    - serial interface (SPI - standard? 4-pin header sounds good right now...)
    - parallel interface (32+pins @ 145MHz...)
    - do we worry about fatigue limits on these?
  - finish schematic 
  - finish layout
  - kickstarter?!
