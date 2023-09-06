export interface ResearchPageItemProps {
  text: String;
  icon?: React.JSX.Element;
  link?: String;
  index?: number;
}

export interface BenchmarkChart {
  chart1: React.JSX.Element;
  chart2: React.JSX.Element;
  chart3: React.JSX.Element;
  chart4: React.JSX.Element;
  index?: number;
}

export interface AlgorithmPageItemProps {
  text: String;
  icon?: React.JSX.Element;
  link?: String;
  index?: number;
}

export interface SideBarProps {
  children: React.ReactNode;
}

export interface BenchmarkTableViewProps {
  id: string;
  BenchmarkTestName: string;
  Hardware: string;
  Waveform: string;
  Standard: string;
  Stability: string;
  Biorealistic: string;
  Advanced: string;
  CreatedAt: number;
}

export interface DialogStandardBenchmarkProps {
  open?: boolean;
  handleClose: () => void;
  selectedBenchmarkView: BenchmarkTableViewProps | null;
}
