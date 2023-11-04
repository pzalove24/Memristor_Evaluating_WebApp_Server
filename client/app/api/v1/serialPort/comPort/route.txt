import { NextResponse } from "next/server";
import { SerialPort } from "serialport";

export async function GET() {
  try {
    const comPortAvailable = await SerialPort.list();

    return NextResponse.json(comPortAvailable, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not find any COM port" },
      { status: 500 }
    );
  }
}
