import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  TDialogInputCRUD,
  TDialogInputCRUDFormik,
} from "@/types/Dialog/DialogType";
import { BenchmarkInputWithInputSetup } from "@/services/apis/benchmark/benchmarkSetup.api";
import {
  useGetBenchmarkInputSetups,
  useGetBenchmarkUnits,
  useGetDataTypes,
} from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.query";
import TableInputCRUD from "../Table/TableInputCRUD";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import {
  useDeleteBenchmarkInputBenchmarkInputSetup,
  usePostCreateBenchmarkInputBenchmarkInputSetup,
  useUpsertBenchmarkBenchmarkInputInputSetups,
  useUpsertCancelBenchmarkInputBenchmarkInputSetup,
} from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.mutate";
import { LoadingApi } from "../Loading/LoadingApi";
import { BenchmarkInputSetup } from "../../../server/shared/prismaTypes";
import { CircularProgress, LinearProgress } from "@mui/material";
import * as Yup from "yup";
import {
  columnDialogInput,
  columnInput,
} from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import { NoDataContent } from "../Loading/NoDataContent";
import { table } from "console";
import DraggableTableInputCRUD from "../Table/DraggableTable/DraggableTableInputCRUD";

const testData = [
  { id: 1, name: "John", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane", email: "jane@example.com", role: "User" },
  { id: 3, name: "Doe", email: "doe@example.com", role: "User" },
];

const columns: columnDialogInput[] = [
  { id: "id", label: "id", minWidth: 100, align: "left" },
  { id: "voltageType", label: "voltageType", minWidth: 50, align: "left" },
  {
    id: "BenchmarkInputSetupName",
    label: "BenchmarkInputSetupName",
    minWidth: 170,
    align: "left",
  },
  {
    id: "benchmarkUnit",
    label: "benchmarkUnit",
    minWidth: 80,
    align: "left",
  },
  {
    id: "dataType",
    label: "dataType",
    minWidth: 70,
    align: "left",
  },
  {
    id: "decimalNumber",
    label: "decimalNumber",
    minWidth: 90,
    align: "left",
  },
  {
    id: "exampleData",
    label: "exampleData",
    minWidth: 90,
    align: "left",
  },
  {
    id: "lowerLimit",
    label: "lowerLimit",
    minWidth: 90,
    align: "left",
  },
  {
    id: "upperLimit",
    label: "upperLimit",
    minWidth: 90,
    align: "left",
  },
  {
    id: "stepIncreasing",
    label: "stepIncreasing",
    minWidth: 50,
    align: "left",
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 50,
    align: "left",
  },
];

const DialogInputCRUD = ({
  open,
  handleClose,
  setUpData,
}: TDialogInputCRUD<BenchmarkInputWithInputSetup>) => {
  const { enqueueSnackbar } = useSnackbar();

  const InputSetupDataSchema = Yup.object().shape({
    benchmarkInputSetupName: Yup.string().required("Setup Name is required"),
    decimalNumber: Yup.number()
      .min(0)
      .max(5)
      .integer("Decimal Number Must be integer from 0 to 5")
      .required("Decimarl Number is required"),
    exampleData: Yup.string().required("example data is required"),
    upperLimit: Yup.number().required("upper limit is required"),
    lowerLimit: Yup.number().required("lower limit is required"),
    stepIncreasing: Yup.number().min(0).required("step increasing is required"),
    // .transform((value, originalValue) => {
    //   // Round the number to two decimal places
    //   return parseFloat(Number(originalValue).toFixed(2));
    // }),
  });

  const validateInputSetupSchema = Yup.object().shape({
    data: Yup.array().of(InputSetupDataSchema).required(),
  });

  const {
    data: listBenchmarkInputSetup,
    isLoading,
    refetch: refetchListBenchmarkInputSetup,
    isRefetching,
  } = useGetBenchmarkInputSetups(setUpData.id);

  const {
    data: listBenchmarkUnits,
    isLoading: isListBenchmarkUnitsLoading,
    refetch: refetchListAllBenchmarkUnit,
  } = useGetBenchmarkUnits();

  const {
    data: listDataTypes,
    isLoading: isListDataTypesLoading,
    refetch: refetchListAllDataType,
  } = useGetDataTypes();

  // const {
  //   data: listMethodTypes,
  //   isLoading: isListMethodTypesLoading,
  //   refetch: refetchListAllMethodType,
  // } = useGetMethodTypes();

  const { mutateAsync: mutateListBenchmarkInputSetup } =
    useUpsertBenchmarkBenchmarkInputInputSetups();

  const {
    data: mutateNewBenchmarkInputSetupData,
    mutate: mutateNewBenchmarkInputSetup,
  } = usePostCreateBenchmarkInputBenchmarkInputSetup();

  const { mutateAsync: mutateCancelListBenchmarkInputSetup } =
    useUpsertCancelBenchmarkInputBenchmarkInputSetup();

  const { mutateAsync: mutateDeleteBenchmarkInputSetup } =
    useDeleteBenchmarkInputBenchmarkInputSetup();

  const loadingCollection =
    isLoading || isListBenchmarkUnitsLoading || isListDataTypesLoading;

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const initialData: TDialogInputCRUDFormik = {
    data: listBenchmarkInputSetup ? listBenchmarkInputSetup : [],
    create: [] as BenchmarkInputSetup[],
    delete: [] as BenchmarkInputSetup[],
    benchmarkUnit: listBenchmarkUnits ? listBenchmarkUnits : [],
    dataType: listDataTypes ? listDataTypes : [],
  };

  const tableBenchmarkInputSetupFormik = useFormik({
    initialValues: initialData,
    validationSchema: validateInputSetupSchema,
    onSubmit: async (values) => {
      console.log("valuesubmit", values);
      await mutateListBenchmarkInputSetup({
        benchmarkInputSetupList: values.data,
        deleteBenchmarkInputSetupList: values.delete
          ? values.delete
          : undefined,
      });
      enqueueSnackbar("Success Save InputSetups.", {
        autoHideDuration: 1000,
        transitionDuration: { enter: 225, exit: 225 },
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      handleClose();
    },
  });

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(() => {
    if (listBenchmarkInputSetup && listBenchmarkUnits && listDataTypes) {
      const initialData: TDialogInputCRUDFormik = {
        data: listBenchmarkInputSetup,
        create: tableBenchmarkInputSetupFormik.values.create
          ? tableBenchmarkInputSetupFormik.values.create
          : ([] as BenchmarkInputSetup[]),
        delete: [] as BenchmarkInputSetup[],
        benchmarkUnit: listBenchmarkUnits,
        dataType: listDataTypes,
      };

      tableBenchmarkInputSetupFormik.setValues(initialData);
    }
  }, [
    listBenchmarkInputSetup,
    listBenchmarkUnits,
    listDataTypes,
    // loadingCollection,
    // isRefetching,
  ]);

  console.log("listBenchmarkInputSetup", listBenchmarkInputSetup);

  React.useEffect(() => {
    if (mutateNewBenchmarkInputSetupData) {
      const currentCreateData = tableBenchmarkInputSetupFormik.values.create;

      const createData = tableBenchmarkInputSetupFormik.values.data.find(
        (row) => row.id === mutateNewBenchmarkInputSetupData.id
      );
      console.log("currentCreateData", currentCreateData);
      console.log("createData", createData);

      if (createData && currentCreateData) {
        currentCreateData.push(createData);
      }

      tableBenchmarkInputSetupFormik.setFieldValue("create", currentCreateData);
    }
  }, [
    tableBenchmarkInputSetupFormik.values.data,
    mutateNewBenchmarkInputSetupData,
  ]);

  const prevBenchmarkInputSetups = React.useRef(listBenchmarkInputSetup);

  console.log("value", tableBenchmarkInputSetupFormik.values);

  // React.useEffect(() => {
  //   if (
  //     listBenchmarkInputSetup &&
  //     newBenchmarkInputSetup &&
  //     listBenchmarkUnits &&
  //     listDataTypes
  //   ) {
  //     tableBenchmarkInputSetupFormik.setValues({
  //       data: listBenchmarkInputSetup,
  //       template: newBenchmarkInputSetup,
  //       benchmarkUnit: listBenchmarkUnits,
  //       dataType: listDataTypes,
  //     });
  //   }

  //   // Update the ref with the current values
  //   prevBenchmarkInputSetups.current = tableBenchmarkInputSetupFormik.values;
  // }, [
  //   isLoading,
  //   listBenchmarkInputSetup,
  //   newBenchmarkInputSetup,
  //   listBenchmarkUnits,
  //   listDataTypes,
  // ]);

  // const createEmptyRow = () => {
  //   const emptyRow: { [key: string]: any } = {};
  //   Object.keys(fields).forEach((key) => {
  //     emptyRow[key] = ""; // Initialize each field with an empty string
  //   });
  //   return emptyRow;
  // };

  // const prevBenchmarkInputSetups = React.useRef(values);

  const handleAdd = () => {
    console.log("render add");
    // มันเพิ่มต่อจากอันเดิม เพราะว่าตอนเรากดเพิ่ม มันไม่ได้ลบข้อมูลเดิมไปด้วยมันเลยต่อกันเป็นพ่วงๆ
    mutateNewBenchmarkInputSetup(
      tableBenchmarkInputSetupFormik.values.data[0].benchmarkInputId
    );
    // prevBenchmarkInputSetups.current = values;
  };

  const handleDelete = (id: string) => {
    const currentDeleteData = tableBenchmarkInputSetupFormik.values.delete;

    const deleteData = tableBenchmarkInputSetupFormik.values.data.find(
      (row) => row.id === id
    );

    if (deleteData && currentDeleteData) {
      currentDeleteData.push(deleteData);
      mutateDeleteBenchmarkInputSetup(deleteData.id);
    }

    const newData = tableBenchmarkInputSetupFormik.values.data.filter(
      (row) => row.id !== id
    );
    tableBenchmarkInputSetupFormik.setFieldValue("data", newData);
    tableBenchmarkInputSetupFormik.setFieldValue("delete", currentDeleteData);
  };

  // const handleSave = (id: string, updatedValues: any) => {
  //   const newData = tableBenchmarkInputSetupFormik.values.data.map((row) => {
  //     if (row.id === id) {
  //       return { ...row, ...updatedValues };
  //     }
  //     return row;
  //   });
  //   tableBenchmarkInputSetupFormik.setValues({ data: newData });
  // };

  const handleAlertClose = () => {
    // if (
    //   prevBenchmarkInputSetups.current.data !==
    //   tableBenchmarkInputSetupFormik.values.data
    // ) {
    //   enqueueSnackbar("Cancel InputSetups Change.", {
    //     autoHideDuration: 1000,
    //     transitionDuration: { enter: 225, exit: 225 },
    //     variant: "info",
    //     anchorOrigin: {
    //       vertical: "top",
    //       horizontal: "right",
    //     },
    //   });
    //   // alert(JSON.stringify("are you sure to cancel edit Data", null, 2));
    // }
    enqueueSnackbar("Cancel InputSetups Change.", {
      autoHideDuration: 2000,
      transitionDuration: { enter: 225, exit: 225 },
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
    if (tableBenchmarkInputSetupFormik.values.delete) {
      mutateCancelListBenchmarkInputSetup({
        benchmarkInputSetupList: tableBenchmarkInputSetupFormik.values.create
          ? [
              ...tableBenchmarkInputSetupFormik.values.create,
              ...tableBenchmarkInputSetupFormik.values.delete,
            ]
          : tableBenchmarkInputSetupFormik.values.delete,
      });
    }

    handleClose();
  };

  // if (!open || loadingCollection || isRefetching) {
  //   return <LinearProgress />; // Don't render the dialog if it's not open or data is loading
  // }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleAlertClose}
        fullWidth
        maxWidth={"xl"}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={tableBenchmarkInputSetupFormik.handleSubmit}>
          <DialogTitle id="scroll-dialog-title">{`Input Setup for ${setUpData.benchmarkInputName}`}</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {/* {loadingCollection || isRefetching ? (
                <LoadingApi />
              ) : tableBenchmarkInputSetupFormik.values.data.length > 0 &&
                !loadingCollection &&
                !isRefetching ? (
                <TableInputCRUD
                  data={tableBenchmarkInputSetupFormik} //TODO
                  onDelete={handleDelete}
                  columns={columns}
                  onAdd={handleAdd}
                  // onSave={handleSave}
                />
              ) : (
                <NoDataContent />
              )} */}
              <DraggableTableInputCRUD />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="inherit"
              onClick={handleAlertClose}
            >
              Cancel All Edit
            </Button>
            <Button
              disabled={
                tableBenchmarkInputSetupFormik.isSubmitting ||
                !tableBenchmarkInputSetupFormik.isValid
              }
              type="submit"
              variant="contained"
              color="info"
            >
              Save Input Setup
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default DialogInputCRUD;
