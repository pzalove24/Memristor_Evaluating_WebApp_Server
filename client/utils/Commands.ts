import React from "react";

export enum BoardCommandType {
  TESTBOARD = "test_board",
  MANUALREAD = "manual_read",
  MANUALWRITE = "manual_write",
  IVCHART = "IVchart",
  Add = "A",
  Subtract = "S",
  Multiply = "M",
  Divide = "D",
}

export interface Command {
  type: BoardCommandType;
  voltage?: number;
  widthVoltage?: number;
}

const handleCommand = (command: Command): number | string => {
  switch (command.type) {
    case BoardCommandType.TESTBOARD:
      return BoardCommandType.TESTBOARD;
    case BoardCommandType.MANUALREAD:
      return `${command.type} ${command.voltage}`;
    case BoardCommandType.MANUALWRITE:
      return `${command.type} ${command.voltage} ${command.widthVoltage}`;
    case BoardCommandType.IVCHART:
      return BoardCommandType.IVCHART;
    case BoardCommandType.Add:
      return command.voltage ? command.voltage : 0;
    case BoardCommandType.Subtract:
      return command.voltage ? command.voltage : 0;
    case BoardCommandType.Multiply:
      return command.voltage ? command.voltage : 0;
    case BoardCommandType.Divide:
      return command.voltage ? command.voltage : 0;
    default:
      // Handle unknown command
      return 0;
  }
};

export default handleCommand;
