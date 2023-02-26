import { useState } from "react";
function AddRemoveInputField() {
  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fullName: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="mt-2 ">
      <div className="block mb-2 text-sm font-medium text-gray-900 ">
        Hashtags
      </div>
      <div>
        <div className="border rounded-md p-1">
          {inputFields.map((data, index) => {
            const { fullName, emailAddress, salary } = data;
            return (
              <div key={index} className="flex">
                <div>
                  <input
                    type="text"
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={fullName}
                    name="fullName"
                    placeholder="Full Name"
                    className="rounded-md border-2 border-gray-300 m-1 p-1"
                    required
                  />
                </div>

                <div>
                  {inputFields.length !== 1 ? (
                    <button
                      className="w-8 bg-gray-800 text-slate-100 p-1 rounded-md m-1 items-center"
                      onClick={removeInputFields}
                    >
                      X
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}

          <div>
            <div>
              <button
                className="bg-slate-900 text-slate-200 p-1 rounded-md my-1 font-semibold"
                onClick={addInputField}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default AddRemoveInputField;
