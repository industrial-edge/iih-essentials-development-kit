function specData() {
    return {
        "openapi": "3.0.1",
        "info": {
            "description": "Public REST API of the Data Service.",
            "version": "1.2.0",
            "title": "Data Service"
        },
        "servers": [
            {
                "url": "https://{ip}:{port}/dataservice/",
                "description": "Data Service URL",
                "variables": {
                    "ip": {
                        "default": "localhost"
                    },
                    "port": {
                        "default": "4203"
                    }
                }
            }
        ],
        "tags": [
            {
                "name": "Assets"
            },
            {
                "name": "Aspects"
            },
            {
                "name": "Variables"
            },
            {
                "name": "Data/Delta"
            },
            {
                "name": "Data"
            },
            {
                "name": "DataRetentions"
            },
            {
                "name": "Calculate"
            }
        ],
        "paths": {
            "/AssetService/Assets": {
                "get": {
                    "summary": "Get all assets.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetIds",
                            "description": "Filter to get only a specified subset of assets.",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "description": "Array of assetId strings encoded in JSON.",
                                "example": "[\"bb92cfc6c4b74eab8cc1a207bc297f21\",\"99c536fe7502438aab2facdbf0372199\"]"
                            }
                        },
                        {
                            "name": "includeChildren",
                            "description": "Only allowed if assetIds are specified.",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "description": "Only allowed if assetIds are specified.",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetsResult"
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Create an asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "includeChildren",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Asset"
                                },
                                "example": {
                                    "name": "Line1",
                                    "parentId": "1"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    },
                                    "example": {
                                        "assetId": "2",
                                        "name": "Line1",
                                        "parentId": "1",
                                        "hasChildren": false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{assetId}": {
                "get": {
                    "summary": "Get a specific asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "includeChildren",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "summary": "Update an asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "includeChildren",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Asset"
                                },
                                "example": {
                                    "name": "Line1",
                                    "parentId": "1"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    },
                                    "example": {
                                        "assetId": "2",
                                        "name": "Line1",
                                        "parentId": "1",
                                        "hasChildren": false
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete an asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    },
                                    "example": {
                                        "assetId": "2",
                                        "name": "Line1",
                                        "parentId": "1",
                                        "hasChildren": false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{assetId}/Order": {
                "put": {
                    "summary": "Update the order of an asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AssetOrder"
                                },
                                "example": {
                                    "relativeTo": "3",
                                    "mode": "after"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    },
                                    "example": {
                                        "assetId": "2",
                                        "name": "Line1",
                                        "parentId": "1",
                                        "hasChildren": false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{assetId}/Breadcrumb": {
                "get": {
                    "summary": "Get the breadcrumb of the specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "description": "Returns the whole parent hierarchy as an array of assets. First array item is the root asset, last array item is the requested asset itself.",
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetsResult"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{assetId}/Children": {
                "get": {
                    "summary": "Get the child-assets of the specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetsResult"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{assetId}/Decendants": {
                "get": {
                    "summary": "Get all sub-assets of the specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "description": "In contrast to /Children this method returns all sub-assets (also children of children ect.).",
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetsResult"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Root": {
                "get": {
                    "tags": [
                        "Assets"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Asset"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Tree": {
                "get": {
                    "tags": [
                        "Assets"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "allOf": [
                                            {
                                                "$ref": "#/components/schemas/Asset"
                                            },
                                            {
                                                "description": "-> Returns the root of the asset hierarchy including children. Children include recursivly also their children."
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects": {
                "get": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Get all aspects.",
                    "description": "Get a list of Aspects. Aspects can be filtered by id or by Asset. If no filter is specified all Aspects will be returned. It is not supported to specify more than one filter parameter.      ",
                    "parameters": [
                        {
                            "name": "aspectIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "Get Aspects by id. The aspectIds have to be specified as JSON array."
                        },
                        {
                            "name": "assetIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "Get Aspects of Assets. The assetIds have to be specified as JSON array."
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "aspects": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/Aspect"
                                                }
                                            }
                                        }
                                    },
                                    "example": {
                                        "assets": [
                                            {
                                                "aspectId": "1",
                                                "aspectName": "Heating",
                                                "assetId": "2"
                                            },
                                            {
                                                "aspectId": "2",
                                                "aspectName": "Cooling",
                                                "assetId": "2"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Create an aspect.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Aspect"
                                },
                                "example": {
                                    "aspectName": "Heating",
                                    "assetId": "2"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "example": {
                                        "aspectId": "1",
                                        "aspectName": "Heating",
                                        "assetId": "2"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects/{id}": {
                "get": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Read an aspect.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "example": {
                                        "aspectId": "1",
                                        "aspectName": "Heating",
                                        "assetId": "2"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Update an aspect.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Aspect"
                                },
                                "example": {
                                    "aspectName": "Heating",
                                    "assetId": "2"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "example": {
                                        "aspectId": "1",
                                        "aspectName": "Heating",
                                        "assetId": "2"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Delete an aspect.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "example": {
                                        "aspectId": "1",
                                        "aspectName": "Heating",
                                        "assetId": "2"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables": {
                "get": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Get all variables.",
                    "description": "Get a list of Variables. Variables can be filterd by id, by Aspects or by Assets. If no filter is specified all Variables will be returned. It is not supported to specify more than one filter parameter.",
                    "parameters": [
                        {
                            "name": "variableIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "Get Variables by id. The variableIds have to be specified as JSON array."
                        },
                        {
                            "name": "aspectIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "Get Variables of Aspects. The aspectIds have to be specified as JSON array."
                        },
                        {
                            "name": "assetIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "Get Variables of Assets. The assetIds have to be specified as JSON array."
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "variables": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/Variable"
                                                }
                                            }
                                        }
                                    },
                                    "example": {
                                        "variables": [
                                            {
                                                "variableId": "1",
                                                "variableName": "Temperature",
                                                "dataType": "Int32",
                                                "assetId": "1",
                                                "aspectId": "",
                                                "aspectName": "",
                                                "adapterId": "1",
                                                "topic": "SIMATIC/Tags/PLC_1/Temp"
                                            },
                                            {
                                                "variableId": "2",
                                                "variableName": "Speed",
                                                "dataType": "Double",
                                                "assetId": "1",
                                                "aspectId": "",
                                                "aspectName": "",
                                                "adapterId": "1",
                                                "topic": "SIMATIC/Tags/PLC_1/Speed"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Create a variable.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Variable"
                                },
                                "example": {
                                    "variableName": "Temperature",
                                    "dataType": "Int32",
                                    "assetId": "1",
                                    "aspectId": "",
                                    "adapterId": "1",
                                    "topic": "SIMATIC/Tags/PLC_1/Temp"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Variable"
                                    },
                                    "example": {
                                        "variableId": "1",
                                        "variableName": "Temperature",
                                        "dataType": "Int32",
                                        "assetId": "1",
                                        "aspectId": "",
                                        "aspectName": "",
                                        "adapterId": "1",
                                        "topic": "SIMATIC/Tags/PLC_1/Temp"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables/{id}": {
                "get": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Get a variable.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Variable"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Create a variable.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Variable"
                                },
                                "example": {
                                    "variableName": "Temperature",
                                    "dataType": "Int32",
                                    "assetId": "1",
                                    "aspectId": "",
                                    "adapterId": "1",
                                    "topic": "SIMATIC/Tags/PLC_1/Temp"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Variable"
                                    },
                                    "example": {
                                        "variableId": "1",
                                        "variableName": "Temperature",
                                        "dataType": "Int32",
                                        "assetId": "1",
                                        "aspectId": "",
                                        "aspectName": "",
                                        "adapterId": "1",
                                        "topic": "SIMATIC/Tags/PLC_1/Temp"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Delete a variable.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Variable"
                                    },
                                    "example": {
                                        "variableId": "1",
                                        "variableName": "Temperature",
                                        "dataType": "Int32",
                                        "assetId": "1",
                                        "aspectId": "",
                                        "aspectName": "",
                                        "topic": "SIMATIC/Tags/PLC_1/Temp"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/Delta": {
                "post": {
                    "summary": "Get the newest variable values.",
                    "description": "Called from the VariableNotificationProvider in its cyclic run. Maximal 2000 values will be returned per Variable. If there are more than 2000 values available a proper lastRequestTime will be returned so that the following values will be returned in the next cyclic run.",
                    "tags": [
                        "Data/Delta"
                    ],
                    "parameters": [
                        {
                            "name": "X-XSRF-TOKEN",
                            "in": "header",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/DeltaDataRequestParams"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DeltaDataResult"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data": {
                "get": {
                    "summary": "Read data of multiple variables.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableIds",
                            "description": "The variableIds have to be specified as JSON array of strings.",
                            "example": "[\"1\",\"2\",\"3\"]",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly at 'from' is included in the result.",
                            "example": "2020-01-01T00:00:00.000Z",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "to",
                            "description": "End timestamp of the data query. A value stored with a timestamp exactly at 'to' is not included in the result.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "limit",
                            "description": "The maximum number of values to be returned for one variable. If not specified a default limit of 2000 is used.",
                            "example": 1000,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "integer"
                            }
                        },
                        {
                            "name": "order",
                            "description": "Optional parameter to specify in which time order the values should be returned. If not specified the default value will be Ascending.",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/SortOrder"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DataResult"
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Write data of multiple variables.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "X-XSRF-TOKEN",
                            "in": "header",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "variableId": {
                                                "type": "string"
                                            },
                                            "values": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/Value"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/SuccessResponse"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete data of multiple variables.",
                    "description": "If the parameters 'from' and 'to' are not specified the whole data will be deleted.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableIds",
                            "description": "The variableIds have to be specified as JSON array of strings.",
                            "example": "[\"1\",\"2\",\"3\"]",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data to delete. A value stored with a timestamp exactly at 'from' is included in the deletion.",
                            "example": "2020-01-01T00:00:00.000Z",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "to",
                            "description": "End timestamp of the data to delete. A value stored with a timestamp exactly at 'to' is not included in the deletion.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/SuccessResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/{variableId}": {
                "get": {
                    "summary": "Read data of a single variable.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableId",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with the timestamp exactly at 'from' is included in the result.",
                            "example": "2020-01-01T00:00:00.000Z",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "datetime"
                            }
                        },
                        {
                            "name": "to",
                            "description": "End timestamp of the data query. The value stored with the timestamp exactly at 'to' is not included in the result.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "datetime"
                            }
                        },
                        {
                            "name": "limit",
                            "description": "The maximum number of values to be returned for one variable. If not specified a default limit of 2000 is used.",
                            "example": 1000,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "integer"
                            }
                        },
                        {
                            "name": "order",
                            "description": "Optional parameter to specify in which time order the values should be returned. If not specified the default value will be Ascending.",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/SortOrder"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DataResult"
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Write data of a single variable.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableId",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "X-XSRF-TOKEN",
                            "in": "header",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Value"
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/SuccessResponse"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete data of a single variable.",
                    "description": "If the parameters 'from' and 'to' are not specified the whole data will be deleted.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableId",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data to delete. A value stored with a timestamp exactly at 'from' is included in the deletion.",
                            "example": "2020-01-01T00:00:00.000Z",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "to",
                            "description": "End timestamp of the data to delete. A value stored with a timestamp exactly at 'to' is not included in the deletion.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/SuccessResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataRetentions": {
                "get": {
                    "tags": [
                        "DataRetentions"
                    ],
                    "summary": "Get the data retention setting.",
                    "description": "Get the data retention setting of the specified asset, aspect or variable.",
                    "parameters": [
                        {
                            "name": "sourceId",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "sourceTypeId",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "aspects": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/DataRetention"
                                                }
                                            }
                                        }
                                    },
                                    "examples": {
                                        "Configured": {
                                            "$ref": "#/components/examples/DataRetentionExample"
                                        },
                                        "Cleared": {
                                            "$ref": "#/components/examples/EmptyDataRetentionExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "DataRetentions"
                    ],
                    "summary": "Update the data retention setting.",
                    "description": "Update the data retention setting of the specified asset, aspect or variable.",
                    "parameters": [
                        {
                            "name": "sourceId",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "sourceTypeId",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/DataRetention"
                                },
                                "examples": {
                                    "Configure": {
                                        "$ref": "#/components/examples/DataRetentionExample"
                                    },
                                    "Clear": {
                                        "$ref": "#/components/examples/EmptyDataRetentionExample"
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DataRetention"
                                    },
                                    "examples": {
                                        "Configured": {
                                            "$ref": "#/components/examples/DataRetentionExample"
                                        },
                                        "Cleared": {
                                            "$ref": "#/components/examples/EmptyDataRetentionExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Calculate": {
                "post": {
                    "summary": "Calculate an aggregated value.",
                    "tags": [
                        "Calculate"
                    ],
                    "parameters": [
                        {
                            "name": "X-XSRF-TOKEN",
                            "in": "header",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/CalculateRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/CalculateResult"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateTrend": {
                "post": {
                    "summary": "Calculate a trend of aggregated values.",
                    "tags": [
                        "Calculate"
                    ],
                    "parameters": [
                        {
                            "name": "X-XSRF-TOKEN",
                            "in": "header",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/CalculateTrendRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/CalculateTrendResult"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "Asset": {
                    "type": "object",
                    "properties": {
                        "assetId": {
                            "type": "string",
                            "readOnly": true
                        },
                        "name": {
                            "type": "string"
                        },
                        "parentId": {
                            "type": "string"
                        },
                        "hasChildren": {
                            "type": "boolean",
                            "description": "Does this Asset has children?",
                            "readOnly": true
                        },
                        "children": {
                            "type": "array",
                            "description": "Optional. Only exists if the query parameter includeChildren was specified.",
                            "items": {
                                "$ref": "#/components/schemas/Asset"
                            },
                            "nullable": true,
                            "readOnly": true
                        },
                        "breadcrumb": {
                            "type": "array",
                            "description": "Optional. Only exists if the query parameter includeBreadcrumb was specified.",
                            "items": {
                                "$ref": "#/components/schemas/Asset"
                            },
                            "nullable": true,
                            "readOnly": true
                        },
                        "error": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                },
                                {
                                    "nullable": true
                                },
                                {
                                    "description": "Only exists if an error occours when requesting multiple assets. Could be for example a NotFoundError (404)."
                                }
                            ]
                        }
                    }
                },
                "AssetOrder": {
                    "type": "object",
                    "properties": {
                        "relativeTo": {
                            "type": "string",
                            "description": "mandatory AssetID of the relative asset to move to"
                        },
                        "mode": {
                            "type": "string",
                            "enum": [
                                "before",
                                "after"
                            ],
                            "description": "mandatory mode, which determines if the asset is inserted before or after the relative asset"
                        }
                    }
                },
                "AssetsResult": {
                    "type": "object",
                    "properties": {
                        "assets": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Asset"
                            }
                        }
                    }
                },
                "Aspect": {
                    "type": "object",
                    "properties": {
                        "aspectId": {
                            "type": "string"
                        },
                        "aspectName": {
                            "type": "string"
                        },
                        "assetId": {
                            "type": "string"
                        }
                    }
                },
                "Variable": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string"
                        },
                        "variableName": {
                            "type": "string"
                        },
                        "dataType": {
                            "$ref": "#/components/schemas/DataType"
                        },
                        "assetId": {
                            "type": "string"
                        },
                        "aspectId": {
                            "type": "string"
                        },
                        "aspectName": {
                            "type": "string"
                        },
                        "unit": {
                            "type": "string"
                        },
                        "adapterId": {
                            "type": "string",
                            "nullable": true,
                            "description": "Extension to the Variable definition in the basic REST API of the DataService."
                        },
                        "topic": {
                            "type": "string",
                            "description": "Adapter specific tag address. In case of the Simiatic Adapter this is a mqtt topic. In case of the HmiRuntime it is a tag name. Extension to the Variable definition in the basic REST API of the DataService."
                        },
                        "connected": {
                            "type": "boolean",
                            "nullable": true,
                            "readOnly": true,
                            "description": "Identicates if a connection to the variable is established or not. This flag is a runtime state, not a configuration property."
                        },
                        "error": {
                            "allOf": [
                                {
                                    "description": "Possible errorKeys are described under VariableErrorKeys."
                                },
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            ]
                        }
                    }
                },
                "VariableErrorKeys": {
                    "type": "object",
                    "properties": {
                        "MqttTagSubscribeFailed": {
                            "type": "string",
                            "description": "Failed to subscribe. Common reason is a missing authorization. errorParams are topic and user."
                        },
                        "MqttTagInvalidAddress": {
                            "type": "string",
                            "description": "The specified address could not be parsed."
                        },
                        "MqttTagConnectionNotFound": {
                            "type": "string",
                            "description": "The specified connection was not found in the meta data. errorParams are connectionName."
                        },
                        "MqttTagNotFound": {
                            "type": "string",
                            "description": "The specified tag was not found in the meta data. errorParams are tagName and connectionName."
                        },
                        "MqttTagWrongDataType": {
                            "type": "string",
                            "description": "Warning - the datatype of the variable does not match to the configuration meta data information. errorParams are dataType and adapterName (dataType in the meta data)."
                        },
                        "DataWriteError": {
                            "type": "string",
                            "description": "Warning - an error occoured when writing a value to the database. errorParams are timestamp, value and qualitycode of a value for which the error occoured."
                        }
                    }
                },
                "Tag": {
                    "type": "object",
                    "properties": {
                        "tagName": {
                            "type": "string",
                            "example": "Tag1"
                        },
                        "connectionName": {
                            "type": "string",
                            "example": "PLC_1"
                        },
                        "topic": {
                            "type": "string",
                            "example": "SIMATIC/Tags/PLC_1/Tag1",
                            "description": "The MQTT topic. Must be unique. It  can be treated as the id of the tag."
                        },
                        "dataType": {
                            "$ref": "#/components/schemas/DataType"
                        }
                    }
                },
                "DataType": {
                    "type": "string",
                    "enum": [
                        "Bool",
                        "Int8",
                        "Int16",
                        "Int32",
                        "Int64",
                        "UInt8",
                        "UInt16",
                        "UInt32",
                        "UInt64",
                        "Float",
                        "Double",
                        "String",
                        "Date",
                        "TimeSpan"
                    ]
                },
                "DataSourceReference": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "$ref": "#/components/schemas/DataSourceType"
                        },
                        "id": {
                            "type": "string",
                            "example": "dc25bc804b464fdeb9cc9b7c36251fe0::Counters::GoodCounter::32::8::11::1",
                            "description": "Depending on the type could be the id of a Variable or a KPI."
                        },
                        "aggregation": {
                            "$ref": "#/components/schemas/Aggregation"
                        }
                    }
                },
                "CalculateRequest": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "to": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "dataSources": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DataSourceReference"
                            }
                        },
                        "variableConfigurations": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/VariableConfiguration"
                            }
                        }
                    }
                },
                "CalculateResult": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CalculatedValue"
                    }
                },
                "CalculatedValue": {
                    "type": "object",
                    "properties": {
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "value": {
                            "type": "number"
                        },
                        "error": {
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            ]
                        }
                    }
                },
                "DataSourceType": {
                    "type": "string",
                    "enum": [
                        "Variable",
                        "KPI"
                    ]
                },
                "Aggregation": {
                    "type": "string",
                    "enum": [
                        "None",
                        "Count",
                        "Average",
                        "Min",
                        "Max",
                        "Sum",
                        "First",
                        "Last",
                        "StandardDeviation",
                        "Variance",
                        "Counter",
                        "Timer",
                        "PowerToEnergy",
                        "EnergyToPower",
                        "FlowToAmount",
                        "AmountToFlow",
                        "TimeWeightedAverage",
                        "Gantt"
                    ]
                },
                "CalculateTrendRequest": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "to": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "calculationTimeRange": {
                            "description": "The timerange used to calculate one trendpoint. The value is specified in milliseconds.",
                            "type": "number"
                        },
                        "dataSources": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DataSourceReference"
                            }
                        },
                        "variableConfigurations": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/VariableConfiguration"
                            }
                        }
                    }
                },
                "CalculateTrendResult": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CalculatedTrend"
                    }
                },
                "CalculatedTrend": {
                    "type": "object",
                    "properties": {
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CalculatedTrendValue"
                            }
                        },
                        "error": {
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                }
                            ]
                        }
                    }
                },
                "CalculatedTrendValue": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "number"
                        },
                        "timestamp": {
                            "type": "string",
                            "format": "date-time"
                        }
                    }
                },
                "VariableConfiguration": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string",
                            "example": "",
                            "readOnly": true,
                            "description": "The id of the variable as defined in MindSphere."
                        },
                        "variableName": {
                            "type": "string",
                            "example": "",
                            "readOnly": true,
                            "description": "The name of the variable as defined in MindSphere."
                        },
                        "variableUnit": {
                            "type": "string",
                            "example": "",
                            "readOnly": true,
                            "description": "The unit of the variable as defined in MindSphere."
                        },
                        "dataType": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/DataType"
                                },
                                {
                                    "readOnly": true
                                },
                                {
                                    "description": "The dataType of the variable as defined in MindSphere."
                                }
                            ]
                        },
                        "assetId": {
                            "type": "string",
                            "example": "",
                            "readOnly": true
                        },
                        "aspectName": {
                            "type": "string",
                            "example": "",
                            "readOnly": true
                        },
                        "unit": {
                            "type": "string"
                        },
                        "isAggregated": {
                            "type": "boolean",
                            "example": false
                        },
                        "acquisitionCategory": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/AcquisitionCategory"
                                },
                                {
                                    "example": "Counter"
                                }
                            ]
                        },
                        "acquisitionCycle": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/TimeRange"
                                }
                            ]
                        },
                        "counterConfigurations": {
                            "type": "array",
                            "nullable": true,
                            "items": {
                                "$ref": "#/components/schemas/CounterConfiguration"
                            }
                        }
                    }
                },
                "AcquisitionCategory": {
                    "type": "string",
                    "enum": [
                        "ProcessValue",
                        "Power",
                        "Energy",
                        "Flow",
                        "Amount",
                        "Counter",
                        "State"
                    ]
                },
                "TimeRange": {
                    "type": "object",
                    "properties": {
                        "base": {
                            "$ref": "#/components/schemas/TimeRangeBase"
                        },
                        "factor": {
                            "type": "number"
                        }
                    }
                },
                "TimeRangeBase": {
                    "type": "string",
                    "enum": [
                        "acyclic",
                        "second",
                        "minute",
                        "hour",
                        "day",
                        "week",
                        "quarter",
                        "year"
                    ]
                },
                "CounterConfiguration": {
                    "type": "object",
                    "properties": {
                        "validFrom": {
                            "type": "string",
                            "format": "date-time",
                            "example": "2019-06-25T00:00:00.000Z"
                        },
                        "counterConstant": {
                            "type": "number",
                            "example": 1
                        },
                        "counterType": {
                            "$ref": "#/components/schemas/CounterType"
                        },
                        "triggeredReset": {
                            "type": "boolean",
                            "example": false
                        },
                        "rangeStart": {
                            "type": "number",
                            "nullable": true,
                            "example": 0
                        },
                        "rangeEnd": {
                            "type": "number",
                            "nullable": true,
                            "example": 1000
                        },
                        "valueAtInstallation": {
                            "type": "number",
                            "nullable": true,
                            "example": null
                        },
                        "valueAtReplacement": {
                            "type": "number",
                            "nullable": true,
                            "example": null
                        }
                    }
                },
                "CounterType": {
                    "type": "string",
                    "enum": [
                        "UpCounter",
                        "ReverseCounter"
                    ]
                },
                "DeltaDataRequestParam": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string"
                        },
                        "lastRequestTime": {
                            "type": "string",
                            "format": "date-time",
                            "nullable": true
                        }
                    }
                },
                "DeltaDataRequestParams": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/DeltaDataRequestParam"
                    }
                },
                "Value": {
                    "type": "object",
                    "properties": {
                        "timestamp": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "value": {
                            "type": "number",
                            "description": "Type can be also string, boolean or timestamp depending on the type of the Variable."
                        },
                        "qualitycode": {
                            "type": "number",
                            "format": "integer"
                        }
                    }
                },
                "Data": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Value"
                            }
                        },
                        "error": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                },
                                {
                                    "nullable": true
                                }
                            ]
                        }
                    }
                },
                "DataResult": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Data"
                            }
                        },
                        "hasMoreData": {
                            "description": "Optional object only present if the specified limit or the implicitly choosen default limit of 2000 is reached and there are more data available. The object contains the from and the to parameter for the next request.",
                            "type": "object",
                            "nullable": true,
                            "properties": {
                                "from": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "to": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            }
                        }
                    }
                },
                "DataSource": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/DataSourceType"
                                },
                                {
                                    "example": "Variable"
                                }
                            ]
                        },
                        "id": {
                            "type": "string",
                            "example": "dc25bc804b464fdeb9cc9b7c36251fe0::Counters::GoodCounter::32::8::11::1"
                        },
                        "aggregation": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/Aggregation"
                                },
                                {
                                    "example": "Counter"
                                }
                            ]
                        },
                        "name": {
                            "type": "string",
                            "example": "GoodCounter",
                            "readOnly": true
                        },
                        "assetId": {
                            "type": "string",
                            "example": "dc25bc804b464fdeb9cc9b7c36251fe0",
                            "readOnly": true
                        },
                        "aspectName": {
                            "type": "string",
                            "example": "Counters",
                            "readOnly": true
                        },
                        "unit": {
                            "type": "string",
                            "example": "Items",
                            "readOnly": true
                        },
                        "dataType": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/DataType"
                                },
                                {
                                    "example": "Double"
                                },
                                {
                                    "readOnly": true
                                }
                            ]
                        },
                        "acquisitionCategory": {
                            "allOf": [
                                {
                                    "description": "Optional. Only available in case of DataSourceType Variable. Else undefined."
                                },
                                {
                                    "$ref": "#/components/schemas/AcquisitionCategory"
                                },
                                {
                                    "example": "Counter"
                                },
                                {
                                    "readOnly": true
                                }
                            ]
                        },
                        "defaultAggregation": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/Aggregation"
                                },
                                {
                                    "example": "Counter"
                                },
                                {
                                    "readOnly": true
                                }
                            ]
                        },
                        "error": {
                            "allOf": [
                                {
                                    "description": "Optional. Only present in error case. Else undefined."
                                },
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                },
                                {
                                    "readOnly": true
                                }
                            ]
                        }
                    }
                },
                "DeltaData": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string"
                        },
                        "lastRequestTime": {
                            "type": "string",
                            "format": "date-time",
                            "nullable": true
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Value"
                            }
                        },
                        "error": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ErrorResponse"
                                },
                                {
                                    "nullable": true
                                }
                            ]
                        }
                    }
                },
                "DeltaDataResult": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DeltaData"
                            }
                        }
                    }
                },
                "SortOrder": {
                    "type": "string",
                    "enum": [
                        "Ascending",
                        "Descending"
                    ]
                },
                "ErrorResponse": {
                    "type": "object",
                    "properties": {
                        "errorKey": {
                            "type": "string",
                            "example": "MissingParameter"
                        },
                        "errorParams": {
                            "nullable": true,
                            "type": "object",
                            "example": {
                                "what": "name"
                            }
                        },
                        "message": {
                            "type": "string",
                            "example": "Parameter name is missing."
                        },
                        "debugInfo": {
                            "nullable": true,
                            "type": "object",
                            "example": {}
                        }
                    }
                },
                "SuccessResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean",
                            "example": true
                        }
                    }
                },
                "DataRetention": {
                    "type": "object",
                    "properties": {
                        "sourceId": {
                            "type": "string"
                        },
                        "sourceTypeId": {
                            "$ref": "#/components/schemas/DataRetentionSourceType"
                        },
                        "settings": {
                            "type": "object",
                            "properties": {
                                "timeSettings": {
                                    "nullable": true,
                                    "type": "object",
                                    "properties": {
                                        "timeRange": {
                                            "$ref": "#/components/schemas/TimeRange"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "DataRetentionSourceType": {
                    "type": "string",
                    "enum": [
                        "asset",
                        "aspect",
                        "variable"
                    ]
                }
            },
            "examples": {
                "DataRetentionExample": {
                    "value": {
                        "sourceId": "1",
                        "sourceTypeId": "asset",
                        "settings": {
                            "timeSettings": {
                                "timeRange": {
                                    "factor": 1,
                                    "base": "month"
                                }
                            }
                        }
                    }
                },
                "EmptyDataRetentionExample": {
                    "value": {
                        "sourceId": "1",
                        "sourceTypeId": "asset",
                        "settings": {
                            "timeSettings": null
                        }
                    }
                }
            }
        }
    };
}