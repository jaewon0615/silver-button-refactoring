export interface SelectedDrugOption {
  shape: string;
  color: string;
  line: string;
}

export interface IDrugShape {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: React.CSSProperties | any;
}

export interface IDrugColor {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: any;
}
export interface IDrugLine {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: {};
}
