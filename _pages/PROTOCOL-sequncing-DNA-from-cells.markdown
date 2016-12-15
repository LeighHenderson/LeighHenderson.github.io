---
title: "Sequencing DNA from cells"
description: "Protocol for cellular DNA sequening. Covers isolation of genomic DNA, PCR amplification, isolation of the DNA sequence of interest, and purification of the DNA from a gel."

permalink: /PROTOCOL-sequening-DNA-from-cells/
category: protocol
---
# PROTOCOL: {{ page.title }}

[PDF]({{ site.url }}/assets/PROTOCOL-sequencing-DNA-from-cells.pdf)

## Collect cells
1.  Grow enough cells for sequencing. ~Minimum: a single confluent well from a 6-well plate. ~Maximum: twice the minimum.
2.  Detach cells from plate as usual for the cell line. Place cell suspension in a conical tube. Centrifuge to pellet cells. Aspirate the supernatant.
3.  [Optional] Store the cells overnight or over the weekend at -80°C

## Isolate genomic DNA (gDNA)
1.  Use the QIAamp DNA Mini kit, following the kit protocol for cultured. Begin with resuspension of the cell pellet in PBS to a final volume of 200ul)
a.  At the last step, elute the DNA in 50ul of distilled water rather than 200ul

## PCR amplify sequence of interest
1.  Make a master mix (make enough for 1-2 samples extra to avoid running out)
a.  Add Taq Polymerase last, aliquoted directly from the freezer. As an enzyme, TaqPol is very sensitive to increases in temperature
b.  A key to good PCR is mixing of each of the reagents; flick to mix
c.  The chart below shows example volumes for each reagent. However, you should follow the recommendations that come with the Taq Polymerase kit. It is a good idea to trial different volumes when using new Taq or new primers in order to optimize the reaction

<p style="background:red">(Reformat table)</p>

Reagent | Example volume per sample (ul) | Recommended volume per sample (ul) | Optimized volume per sample (ul)
----|----|----|----|
10x Taq Buffer | 2.5 | | 
dNTP (10uM each) | 0.5 | | 
MgCl2 | 1.5 | | 
ddH20 | 7.75 | | 
10uM forward primer | 1.25 | | 
10uM reverse primer | 1.25 | | 
Taq Polymerase | 0.25 | | 
Total | 15 | | 


2.  Aliquot 15ul master mix per sample into an 8-well strip tube
3.  Add 10ul sample gDNA to each tube
4.  PCR amplify
a.  Again, you may need to optimize the reaction for new primers

<p style="background:red">(INSERT TABLE)</p>

Stage | 1 | 2 | 3
--|--|--|--
Cycles | x1 | x35 | x1
Temperature | 95C | 95C, Tm of primers, 72C | 72C, 4C
Purpose | TaqPol activation | denaturation | extension | annealing | final annealing, storage stablity 
Example time | 5min | 30s, 30s, 30s/500bp | 5-10min, infinity
Optimized time | | | 

## Isolate sequence of interest on a DNA gel
1.  Make a DNA gel (adjust amounts to fit gel mold)
a.  Mix in a >200ml flask: 100mL 1x TAE + 1g agarose powder
b.  Microwave 1 min, swirl. Microwave 30s. Wait until boiling subsides, swirl. Bring to bench and wait till steam nearly subsides.
c.  Add 10ul of 10mg/ml ethedium bromide
i.  OR 10ul of 10,000x SYBRsafe dye
d.  Pour into gel box mold with comb(s)
e.  Let set >30min. Gel can be stored overnight at 4°C wrapped in plastic wrap
2.  Set gel in gel box, barely cover with 1x TAE (this TAE may be reused many times)
a.  DNA is negatively charged and will migrate towards the (+) electrode
3.  To each sample, add loading buffer (ex. 0.5ul of 0.5x diluted BlueJuice)
4.  To the first lane, aliquot 10ul DNA ladder (ex. Axygen 100bp ladder)
5.  To the other lanes, aliquot all (~26ul) of sample
6.  Run the gel at ~70V for 1hr. Check gel every 30min afterwards
7.  Image the gel

## Purify band from DNA gel
1.  Label a set of eppendorf tubes: 1 tube per sample
2.  Put on UV safety gear: lab coat, black gloves, and UV shield
3.  Take gel, razor blade, tubes, kim wipes, and 70% ethanol to the UV box
4.  Clean the razor blade and UV box with the ethanol, wipe dry
5.  Cut out each band, place in tube
6.  Purify DNA from the gel using the QIAquick Gel Extraction Kit, following basic instructions on the enclosed card

## Send for sequencing
1.  Label a new set of eppendorf tubes: 1 tube per sample and 1 tube per primer
2.  Aliquot to each sample tube: 10ul of sample per primer to be used
a.  ex. If sample with be sequenced with 2 primers, aliquot 20ul 
3.  Aliquot to each primer tube: 10ul of 5uM primer per sample to be sequenced
a.  ex. If there are 5 samples to be sequenced, aliquot 50ul
b.  Note: primer stocks are 100uM, primer aliquots are 10uM
4.  Send samples to be sequenced at a sequencing company

## Analyze sequences
1.  Open .abi sequence files with FinchTV
2.  See separate protocol
