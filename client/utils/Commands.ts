import {
  BoardCommandType,
  CurrentRangeType,
  DecimalType,
  TestCommandType,
} from "@/types/commandType";
import React from "react";

export interface Command {
  tag: BoardCommandType;
  write_voltage?: number; // Voltage 0.100 Voltage
  pulse_width?: number; // Second eg. 0.001 Second
  current_range?: CurrentRangeType; // 1uA 10uA 100uA 1mA
  read_voltage?: number | "WEB"; // Voltage // 0.100 Voltage if it is web that send data then will be "WEB"
  read_current?: number | "WEB"; // Ampere eg. 4.11E-05 Ampere if it is web that send data then will be "WEB"
  calculated_resistance?: number | "WEB"; // Ohn eg. 8.374e-7 Ohm if it is web that send data then will be "WEB"
}

const defaultWebConfig: Command = {
  tag: TestCommandType.TESTBOARD_WEB,
  write_voltage: Number((0.1).toFixed(DecimalType.DECIMAL)),
  pulse_width: Number((0.001).toFixed(DecimalType.DECIMAL)),
  current_range: CurrentRangeType.ONE_MA,
  read_voltage: "WEB",
  read_current: "WEB",
  calculated_resistance: "WEB",
};

const handleCommand = (command: Command): number | string => {
  const computedCommand: Command = {
    tag: command.tag,
    write_voltage: command.write_voltage
      ? Number(command.write_voltage.toFixed(DecimalType.DECIMAL))
      : defaultWebConfig.write_voltage,
    pulse_width: command.pulse_width
      ? Number(command.pulse_width.toFixed(DecimalType.DECIMAL))
      : defaultWebConfig.pulse_width,
    current_range: command.current_range
      ? command.current_range
      : defaultWebConfig.current_range,
    read_voltage:
      command.read_voltage && command.read_voltage !== "WEB"
        ? Number(command.read_voltage.toFixed(DecimalType.DECIMAL))
        : defaultWebConfig.read_voltage,
    read_current:
      command.read_current && command.read_current !== "WEB"
        ? command.read_current
        : defaultWebConfig.read_current,
    calculated_resistance:
      command.read_voltage &&
      command.read_voltage !== "WEB" &&
      command.read_current &&
      command.read_current !== "WEB"
        ? Number((command.read_voltage / command.read_current).toExponential(3))
        : defaultWebConfig.calculated_resistance,
  };

  if (command.tag) {
    return `${computedCommand.tag},${computedCommand.write_voltage},${computedCommand.pulse_width},${computedCommand.current_range},${computedCommand.read_voltage},${computedCommand.read_current},${computedCommand.calculated_resistance}`;
  }

  return `command_error,${computedCommand.write_voltage},${computedCommand.pulse_width},${computedCommand.current_range},${computedCommand.read_voltage},${computedCommand.read_current},${computedCommand.calculated_resistance}`;
  // switch (command.type) {
  //   case BoardCommandType.TESTBOARD:
  //     return BoardCommandType.TESTBOARD;
  //   case BoardCommandType.MANUALREAD:
  //     return `${command.type} ${command.voltage}`;
  //   case BoardCommandType.MANUALWRITE:
  //     return `${command.type} ${command.voltage} ${command.widthVoltage}`;
  //   case BoardCommandType.IVCHART:
  //     return BoardCommandType.IVCHART;
  //   default:
  //     // Handle unknown command
  //     return 0;
  // }
};

export default handleCommand;
