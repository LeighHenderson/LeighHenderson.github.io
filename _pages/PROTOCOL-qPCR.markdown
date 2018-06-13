---
title: "RNA quantification with qPCR"
description: Methods for measuring RNA transcripts and tips for analysis of the data.

layout: default
permalink: /PROTOCOL-qPCR/
category: protocol
---
# PROTOCOL: {{ page.title }}

[PDF]({{ site.url }}/assets/PROTOCOL-qPCR.pdf)

### Purpose
1. To design and analyze qPCR experiments in such a way that the results are repeatable and publishable
2. To account for differences in amplification efficiencies between TaqMan probes

### Background
See the Real-time PCR handbook by LifeTechnologies or BIO-RAD Real-Time PCR Applications Guide (2006)

### Materials
- StepOne machine and software
- RNA isolation kit, ex. . QIAshredder + Qiagen RNeasy kit
- Reverse transcription kit (ex. qScript cDNA Synthesis kit, Quanta 95047)
- Control probe, ex. beta-actin
- Experimental probe
- Experimental sample, ex. cells

### RNA preparation + qPCR 
1. Perform RNA isolation (ex. QIAshredder + Qiagen RNeasy kit)
2. Perform reverse transcription (ex. qScript cDNA Synthesis kit, Quanta 95047)
3. Run a qPCR standard curve. Analyze it (see analysis methods below). If the reaction is determined to be sub-optimal, troubleshoot until it is optimal
4. Perform qPCR for the samples. 
    a. Each plate with samples on it must have a standard curve on the same plate. Use the amplification efficiency calculated from the standard curve on the same plate for analysis. This way, results from samples from different plates can be combined.

### Notes on required wells in the qPCR plate
#### First run for a new probe
- Standard curve for each probe: The standard curve must encompass the entire Ct range for all samples tested. Therefore, the standard curve sample should come from the tissue with the highest gene expression (ie. colon for Cftr expression). If samples will fall across a large range of the standard curve and the standard curve is not linear across this range, a second standard curve sample from a tissue with lower gene expression may be needed. Dilute the standard curve sample into RNase-free water in a 1:2 - 1:10 dilution series composed of at least 5 dilutions. See section 1.1.3 on pages 4-6 of the BIO-RAD Real-Time PCR Applications Guide (2006) for an overview of qPCR standard curves.
- Control sample to test for contamination with genomic DNA: –RT (all components of reverse transcription except reverse transcriptase) or 100ng total RNA alone. Run one control per probe using the standard curve sample with the highest concentration.
#### Subsequent runs 
- Samples in duplicate or triplicate
- Control to test for contamination with genomic DNA: –RT (all components of reverse transcription except reverse transcriptase) or 100ng total RNA alone. Run a control for every sample.
- Standard curve for each probe (see above)

### qPCR analysis
1. Open the results file in StepOne software
2. Set the amplification plot type to “Rn vs. Cycle” (linear y-axis)
3. Manually set the range of cycles for baseline calculation manually for both the housekeeping probe (ex. actin) and the experimental probe. The baseline should be in the linear non-increasing part of the curve for all samples. A typical baseline ranges from cycles 3-15.
4. Set the amplification plot type to “Delta Rn vs. Cycle” (linear y-axis)
5. Manually set the threshold for both Cftr and actin. The threshold should be in the linear, exponentially increasing part of the curve for all samples; just above the lowest number at which this is possible.
    a. It is important to set the threshold from the Delta Rn vs. Cycle view
6. Export the results. In the export window, customize the report to include only the following fields: well, sample name, target, baseline, CT, and CT threshold
    a. Note: Cycle threshold (CT) will be abbreviated as Ct hereafter

### qPCR standard curve
Optimized qPCR assays are characterized by:
- A linear standard curve (R2 > 0.980 or r > |–0.990|)
- High amplification efficiency (90–105%)
- Consistency across replicate reactions

1.  Plot the logd(dilution factor) against Ct value, where d = the dilution factor for the dilution series (ex. 10 for the 1:10 series or 2 for the 1:2 series).  Calculate the linear regression line (y=mx+b) and its coefficient of determination (R2). (ex. Fig 2).






