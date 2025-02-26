---
title: CO2 reduction system via descriptor-based high-throughput screening
description: This approach enhances early warnings, storm tracking, and decision-making, making severe weather predictions more reliable and actionable.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/346612a5-c5cc-4f3f-abd5-e947f5a1ef92)

> Fig. 1 | ML-guided prediction of molecular photocatalytic system. a, A schematic illustration of the natural photosystem and artificial molecular  photocatalytic system. FNR, ferredoxin-NADP+ reductase; Fd, ferredoxin; PSI, photosystem I. b, Schematic diagrams of the experiment flow for synthesis, characterization and performance testing of a typical artificial molecular photocatalytic system. c, The workflow of a data-driven ML strategy for rapidly screening the combinations of photosensitizers and catalysts. Ead, the CO2 adsorption energy of catalyst; JCP and J∗ CP, the intrinsic and transition dipole coupling values, respectively; τex, the lifetime of the photosensitizer. d, The two-dimensional distribution of combinations of photosensitizers and catalysts via couplings of intrinsic dipole moment and transition dipole moment. The blue points indicate five promising molecular photocatalytic systems, and the black points indicate the ruled-out ones. e, Experimental (Exp.) validation of the catalytic performance for predicted molecular photocatalytic systems in CO2RR. The blue and black points indicate the promising and randomly selected ruled-out photocatalytic systems in d, respectively. The red stars in d and e indicate the best molecular photocatalytic system validated by experiments. TONCO, the TONs for produced CO; selectivityCO, ratio of the amount of CO to the sum of amounts of all products

<br>
<br>

 A **molecular photocatalytic system** that efficiently reduces **CO₂ to CO** using a combination of a **copper (CuI) photosensitizer** and a **cobalt (CoII) catalyst**. The system was identified using **machine learning (ML)-assisted high-throughput screening**, which evaluated thousands of potential combinations of catalysts and photosensitizers to find the most efficient ones.

The best-performing system consists of:
- **Photosensitizer**: \([Cu^I(P^P)(N^N)]PF₆\)  
- **Catalyst**: \([Co^II L(H₂O)₂]ClClO₄\)  
- **Electron donor**: 1,3-Dimethyl-2-phenyl-2,3-dihydro-1H-benzo[d]imidazole (BIH)

This system achieved a **turnover number (TON) of 4,390** with **93.8% selectivity for CO production**, meaning it's highly effective at converting CO₂ into CO.


### **How does it work?**
1. **Light absorption**: The **CuI photosensitizer** absorbs visible light and gets excited.
2. **Electron transfer**: An electron donor (BIH) transfers an electron to the photosensitizer, reducing it to $\text{Cu}^{I} \text{PS}^{-}$ .
3. **Catalytic cycle initiation**:
   - The reduced photosensitizer transfers the electron to the CoII catalyst.
   - The CoII catalyst is reduced to CoI, creating an active catalytic site.
4. **CO₂ reduction steps**:
   - CO₂ binds to the CoI catalyst.
   - The system undergoes a series of **electron and proton transfer steps**, eventually converting CO₂ into CO.
   - The CO molecule detaches, and the catalyst is regenerated for the next cycle.

The study confirms that **dipole coupling** plays a crucial role in efficient electron transfer and catalytic reaction dynamics.


### **How can we use it?**
1. **Carbon Capture & Utilization (CCU)**: This system can be used to convert captured CO₂ into **carbon monoxide (CO)**, which is a valuable feedstock for **fuel production** (e.g., syngas for methanol synthesis).
2. **Artificial Photosynthesis**: It mimics natural photosynthesis but with improved efficiency, contributing to **green energy solutions**.
3. **Solar-to-Chemical Energy Conversion**: Since this system runs on **solar energy**, it offers a **sustainable route for CO₂ reduction**, helping to combat climate change.
4. **Industrial Applications**: The high selectivity (93.8%) means that the system can be scaled for **chemical manufacturing** where CO is needed.
5. **Further Optimization**: The ML-assisted approach can be extended to discover even better catalysts, further improving CO₂ conversion technologies.

### Sources & citation

> Hu, Y., Yu, C., Wang, S. et al. Identifying a highly efficient molecular photocatalytic CO2 reduction system via descriptor-based high-throughput screening. Nat Catal 8, 126–136 (2025). https://doi.org/10.1038/s41929-025-01291-z
