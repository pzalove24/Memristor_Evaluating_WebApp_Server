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
  operand1?: number;
  operand2?: number;
}

const handleCommand = (command: Command): number | string => {
  switch (command.type) {
    case BoardCommandType.TESTBOARD:
      return BoardCommandType.TESTBOARD;
    case BoardCommandType.MANUALREAD:
      return BoardCommandType.MANUALREAD;
    case BoardCommandType.MANUALWRITE:
      return BoardCommandType.MANUALWRITE;
    case BoardCommandType.IVCHART:
      return BoardCommandType.IVCHART;
    case BoardCommandType.Add:
      return command.operand1 ? command.operand1 : 0;
    case BoardCommandType.Subtract:
      return command.operand1 ? command.operand1 : 0;
    case BoardCommandType.Multiply:
      return command.operand1 ? command.operand1 : 0;
    case BoardCommandType.Divide:
      return command.operand1 ? command.operand1 : 0;
    default:
      // Handle unknown command
      return 0;
  }
};

export default handleCommand;
