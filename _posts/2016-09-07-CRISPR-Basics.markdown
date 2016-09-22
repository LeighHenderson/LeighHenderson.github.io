---
layout: post
title:  "CRISPR/Cas9"
date:   2016-09-07 10:14:00 -0400
categories: CRISPR
---
# Background
Every gene is a sequence of the four same bases: A, C, G, and T.  Genetic diseases can occur when that sequence is changed, or mutated, from the usual sequence. For example, a mutation that changes the sequence from ATCTTT to ATT (a deletion of the bases CTT) in the gene *CFTR* can cause the disease cystic fibrosis. 
9 is a technique for gene editing. It allows for the introduction of mutations at specific locations in the genome.

<img src="/assets/Figure_CFTRsequence_nearF508del.jpg" alt="Figure. CFTR sequence near F508del" style ="width:400px">

> **Figure 1.** The sequence of the gene *CFTR* near the F508del mutation. The upper seqence shows the usual sequence, which includes the F508 codon (in green). Deletion of the F508 codon (a mutation called F508del) is shown in the lower sequence. Both sequences have two rows of bases because DNA is double stranded. The forward strand is read in the 5' to 3' direction, and the reverse strand is read in the 3' to 5' direction. 

What if it were possible to those 3 bases back into the gene *CFTR*? Each cell in the body has its own copy of the genome (and *CFTR*). So if we could add CTT back to *CFTR* in one cell, then that cell would be “cured” of cystic fibrosis. And if we could put that CTT back into all (or many) of the cells of a person with cystic fibrosis, then they would be cured! 

Making specific changes to the genome is the goal of gene-editing. CRISPR/Cas9 is a technique for gene-editing.

# How CRISPR/Cas9 works
There are two problems in gene editing: (1) finding the right spot in the genome and (2) making the desired edit. 

## (1) Finding the right spot

In the maze of the 3.2 billion bases of the human genome, how does one find the right couple of bases to edit? The base pairs are too small to see with any microscope, so dissection is not an option. Fortunately, nature has come up with ways to target specific sequences of DNA. For example, the bacterial protein Cas9 specifically binds to harmful viral DNA sequences with the help of a special RNA sequence. This RNA sequence is transcribed from the CRISPR region of the bacterial genome, hence the term CRISPR/Cas9. When Cas9 binds DNA, it cuts the DNA strand into two pieces. Cutting apart viral DNA destroys it and protects the bacteria from harm. Some clever scientists, including [Mali et al.] and [Le Cong et al.], adapted the bacterial CRISPR/Cas9 system for use as a gene-editing tool. Cutting apart genomic DNA is the first step in gene editing.

<img src="/assets/Figure_Cas9_cartoon.jpg" alt="Figure. Cas9" style ="width:300px">

> **Figure 2.** Cas9. The Cas9 protein is a nuclease, meaning that it is capable of cutting apart DNA.

<img src="/assets/Figure_guideRNA_targetingCFTR_F508del.jpg" alt="Figure. guideRNA" style="width:400px">

> **Figure 3.** guideRNA. The guideRNA is designed by scientists to contain two domains: the first domain (shown in red) matches the target sequence of DNA and the second domain (shown in black) folds in on itself, giving it what is called secondary structure, so that it can bind to Cas9. In this figure, the first domain targets *CFTR* DNA that has the F508del mutation.

<img src="/assets/Figure_Cas9_guideRNA_DNA_complex.jpg" alt="Figure. Cas9 + guideRNA complex bound to genomic DNA near CFTR F509del" style="width:400px">

> **Figure 4.** The Cas9 + guideRNA complex bound to genomic DNA. Genomic DNA with the sequence of CFTR near the F508del mutation is shown in blue. Part of the genomic DNA has "unzipped" and one strand is bound to the guideRNA. Cas9 will break the DNA near the location of the scissors shown in the figure.

## (2) Making the desired edit
Once the right genomic location is cut, the next goal is to make a specific change in the DNA sequence. For example, reintroduction of the missing CTT base pairs into the gene *CFTR*. This is actually the easy part of gene-editing. Breaks in DNA structure trigger cellular DNA damage repair pathways. The homology directed repair pathway uses a template sequence to repair DNA breaks. Making the desired edit therefore involves the introduction of a template sequence with the edit. The cell incorporates the edit during the natural DNA repair process.

<img src="/assets/Figure_homology_directed_repair.jpg" alt="Figure. Homology directed repair" style="width:800px">



<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">CRISPR Basics</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://LeighHenderson.github.io" property="cc:attributionName" rel="cc:attributionURL">Leigh Henderson</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

[//]: #(These are references used above, to be processed by Jekyll)
   [Mali et al.]: <http://www.ncbi.nlm.nih.gov/pubmed/23287722>
   [Le Cong et al.]: <http://www.ncbi.nlm.nih.gov/pubmed/23287718>

