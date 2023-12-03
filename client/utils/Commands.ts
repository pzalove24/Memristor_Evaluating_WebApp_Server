import React from "react";

export enum BoardCommandType {
  MANUALREAD = "manual_read",
  MANUALWRITE = "manual_write",
  IVchart = "IVchart",
  Add = "A",
  Subtract = "S",
  Multiply = "M",
  Divide = "D",
}

export interface Command {
  type: BoardCommandType;
  operand1: number;
  operand2: number;
}

const handleCommand = (command: Command): number | string => {
  switch (command.type) {
    case BoardCommandType.MANUALWRITE:  
      return BoardCommandType.MANUALWRITE;
    case BoardCommandType.Add:
      return command.operand1 + command.operand2;
    case BoardCommandType.Subtract:
      return command.operand1 - command.operand2;
    case BoardCommandType.Multiply:
      return command.operand1 * command.operand2;
    case BoardCommandType.Divide:
      return command.operand2 !== 0 ? command.operand1 / command.operand2 : 0;
    default:
      // Handle unknown command
      return 0;
  }
};

export default handleCommand;
