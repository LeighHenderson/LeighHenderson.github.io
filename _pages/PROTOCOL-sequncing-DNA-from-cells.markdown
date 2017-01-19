---
title: "Sequencing DNA from cells"
description: "Protocol for cellular DNA sequening. Covers isolation of genomic DNA, PCR amplification, isolation of the DNA sequence of interest, and purification of the DNA from a gel."

permalink: /PROTOCOL-sequening-DNA-from-cells/
stylesheets: flexbox-datatable
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

<ul class="container two-column">
    <li class="item table-title">Example master mix</li>

    <li class="item header">Reagent</li>
    <li class="item header">Volume per sample (ul)</li>

    <li class="item">10x Taq Buffer</li>
    <li class="item">2.5</li>

    <li class="item">dNTP (10uM each)</li>
    <li class="item">0.5</li>

    <li class="item">MgCl2</li>
    <li class="item">1.5</li>

    <li class="item">ddH20</li>
    <li class="item">7.75</li>

    <li class="item">10uM forward primer</li>
    <li class="item">1.25</li>

    <li class="item">10uM reverse primer</li>
    <li class="item">1.25</li>

    <li class="item">Taq Polymerase</li>
    <li class="item">0.25</li>

    <li class="item">Total</li>
    <li class="item">15</li>
</ul>


2.  Aliquot 15ul master mix per sample into an 8-well strip tube
3.  Add 10ul sample gDNA to each tube
4.  PCR amplify
a.  Again, you may need to optimize the reaction for new primers

<ul class="container four-column">
    <li class="item table-title">Example PCR program</li>

    <li class="item header">Stage</li>
    <li class="item header">1</li>
    <li class="item header">2</li>
    <li class="item header">3</li>

    <li class="item header">Cycles</li>
    <li class="item">1</li>
    <li class="item">35</li>
    <li class="item">1</li>

    <li class="item header">Temperature</li>
    <li class="item">95C</li>
    <li class="item">95C, Tm of primers, 72C</li>
    <li class="item">72C, 4C</li>

    <li class="item header">Purpose</li>
    <li class="item">TaqPol activation</li>
    <li class="item">denaturation, extension, annealing</li>
    <li class="item">final annealing, storage stablity</li>

    <li class="item header">Time</li>
    <li class="item">5min</li>
    <li class="item">30s, 30s, 30s per 500bp</li>
    <li class="item">5-10min, infinite</li>
</ul><br>

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
