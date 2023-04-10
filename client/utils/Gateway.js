/* eslint-disable */

const getProcess = (url, params) => {
  return request(url, params, "GET");
};

const postProcess = (endpoint, params) => {
  return request(endpoint, params, "POST");
};

const putProcess = (endpoint, params) => {
  return request(endpoint, params, "PUT");
};

const deleteProcess = (endpoint, params) => {
  return request(endpoint, params, "DELETE");
};

const formdata = async (url, object_data, method) => {
  try {
    const config = {
      method: method,
    };

    const data = new FormData();

    let objArray = Object.keys(object_data);

    objArray.forEach((element) => {
      data.append(element, object_data[element]);
    });

    config["body"] = data;

    const result = await fetch(url, config);

    return result.json();
  } catch (error) {
    return error.message;
  }
};

const request = async (url, params, method) => {
  try {

      const config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (method == "POST" || method == "PUT") {
      config["body"] = JSON.stringify(params);
    }

    let result = await fetch(url, config);

    if (result.ok) {
      return await result.json();
    } else {
      let errorData = { status: false, message: "Check base url or endpoint" };
      return errorData;
    }
  } catch (error) {
    return error.message;
  }
};

export {
  getProcess,
  postProcess,
  putProcess,
  deleteProcess,
  formdata,
};
