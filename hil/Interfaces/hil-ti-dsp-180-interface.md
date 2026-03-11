---
id: hil-ti-dsp-180-interface
title: TI DSP 180 Interface
description: Provides a pin-to-pin compatible interface between Typhoon HIL emulators and Texas Instruments (TI) C2000™ MCU controlCARDS™.
---

## HIL TI DSP 180 Interface

Our Hardware-in-the-Loop (HIL) Digital Signal Processor (DSP) interface serves as a communication bridge between the DSP and the simulation environment, allowing real-time data exchange and control between the DSP and other components of the HIL setup, such as sensors, actuators, or control units.


### Pin-to-Pin Compatible Interface

HIL TI DSP 180 provides a pin-to-pin compatible interface between Typhoon HIL emulators and Texas Instruments (TI) C2000™ MCU controlCARDS™. In less than 5 minutes you can plug a HIL TI DSP interface to a Typhoon HIL simulator, map that signals, and deploy a closed loop control. Interface card is pin-to-pin compatible with:

- [TMDSCNCD28379D ControlCARD™](https://www.ti.com/tool/TMDSCNCD28379D)
- TMDSCNCD28388D ControlCARD™
- TMDSCNCD28025C ControlCARD™
- TMDSCNCD280039C ControlCARD™
- TMDSCNCD280049C ControlCARD™
- TMDSCNCD2800137 ControlCARD™
- TMDSCNCD2800157 ControlCARD™
- TMDSCNCD28P55X ControlCARD™
- TMDSCNCD28P65X ControlCARD™

## Overview

The HIL DSP 180 Interface is an interface board, designed to enable a seamless interface between 180-pin Texas Instruments Control Card platforms and any HIL device.
Features:

- All HIL and DSP signals available through measurement terminals
- One HSEC 180 pin socket for one of the supported Texas Instruments Control Cards
- Power supply selector switch (HIL or external) with LED indication
- RJ45 CAN bus connector (3.3V)
- JTAG connector for external emulator (voltage level 3.3V)
- 24 HIL Digital Inputs (including 16 DSP PWM signals)
- 16 HIL Digital Outputs (including DSP 3 encoder signals)
- 24 HIL Analog Outputs (clamped to 3.3V on the Control Card)

