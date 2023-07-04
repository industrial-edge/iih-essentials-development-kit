function specData() {
    return {
        "openapi": "3.0.1",
        "info": {
            "title": "DataService API",
            "description": "Description of the REST API of DataService. <br>The maximum size limit for a single request (no file) is 4 MB.<br>The connection timeout is 10 seconds.<br>The routes starting with \"/TokenManagerService/*\" are also available at port 4521.<br>This is deprecated and will be supported until 2023-09-07.",
            "version": "1.7.0"
        },
        "servers": [
            {
                "url": "http://localhost:4203",
                "description": "local running data service"
            },
            {
                "url": "http://edgeappdataservice:4203",
                "description": "data service in docker container"
            }
        ],
        "tags": [
            {
                "name": "Adapters"
            },
            {
                "name": "Aggregations"
            },
            {
                "name": "Aspects"
            },
            {
                "name": "AspectTypes"
            },
            {
                "name": "Assets"
            },
            {
                "name": "Backup",
                "description": "Backup and restore of config and timeseries."
            },
            {
                "name": "Calculate"
            },
            {
                "name": "CalculateJobCollections"
            },
            {
                "name": "Data"
            },
            {
                "name": "DataDestination"
            },
            {
                "name": "DataRetention"
            },
            {
                "name": "DataSource"
            },
            {
                "name": "DataSync"
            },
            {
                "name": "Service",
                "description": "General information."
            },
            {
                "name": "TokenManager",
                "description": "Legacy routes for dependencies. These routes are only simulated to provide the functionality."
            },
            {
                "name": "Variables"
            },
            {
                "name": "VariableConfigurations"
            }
        ],
        "paths": {
            "/DataService/Adapters": {
                "get": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Get all adapters.",
                    "description": "Get a list of all available Adapters.",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "adapters": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/Adapter"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Create a new adapter.",
                    "description": "Create a new adapter. Name must be unique and not empty, 'locked' must be set to false.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Adapter"
                                },
                                "example": {
                                    "name": "Simatic Connector",
                                    "type": "simaticadapter",
                                    "locked": false,
                                    "active": false,
                                    "isDefault": false,
                                    "config": {
                                        "brokerURL": "tcp://ie-databus:1883",
                                        "username": "edge",
                                        "password": "edge",
                                        "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
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
                                        "$ref": "#/components/schemas/Adapter"
                                    },
                                    "example": {
                                        "id": "0cb25043c8bb47de835b2573285862da",
                                        "name": "Simatic Connector",
                                        "type": "simaticadapter",
                                        "locked": false,
                                        "active": false,
                                        "isDefault": false,
                                        "canBrowse": true,
                                        "connected": false,
                                        "config": {
                                            "brokerURL": "tcp://ie-databus:1883",
                                            "username": "edge",
                                            "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "AdapterNameAlreadyInUse",
                                                "message": "There is already an adapter with the name 'Profinet IO Connector'.",
                                                "errorParams": {
                                                    "nameInUse": "Profinet IO Connector"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Adapters"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Adapters/{id}": {
                "get": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Read an adapter.",
                    "description": "Read a specific adapter with the id from path.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "profinet",
                            "in": "path",
                            "description": "adapter id to search for",
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
                                        "$ref": "#/components/schemas/Adapter"
                                    },
                                    "examples": {
                                        "SimaticAdapter": {
                                            "$ref": "#/components/examples/AdapterTypeMqttExample"
                                        },
                                        "OpenPipeAdapter": {
                                            "$ref": "#/components/examples/AdapterTypeOpenPipeExample"
                                        },
                                        "GrpcAdapter": {
                                            "$ref": "#/components/examples/AdapterTypeGrpcExample"
                                        },
                                        "SystemInfoAdapter": {
                                            "$ref": "#/components/examples/AdapterTypeSystemInfoExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AdapterNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Update an adapter.",
                    "description": "Update a specific adapter. Name must be unique and not empty. 'type' and 'locked' are readOnly.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "adapter id to search for",
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
                                    "$ref": "#/components/schemas/Adapter"
                                },
                                "example": {
                                    "name": "Simatic Connector",
                                    "type": "simaticadapter",
                                    "locked": false,
                                    "active": false,
                                    "isDefault": false,
                                    "config": {
                                        "brokerURL": "tcp://ie-databus:1883",
                                        "username": "edge",
                                        "password": "edge",
                                        "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
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
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "example": {
                                        "id": "0cb25043c8bb47de835b2573285862da",
                                        "name": "Simatic Connector",
                                        "type": "simaticadapter",
                                        "locked": false,
                                        "active": false,
                                        "isDefault": false,
                                        "canBrowse": true,
                                        "connected": false,
                                        "config": {
                                            "brokerURL": "tcp://ie-databus:1883",
                                            "username": "edge",
                                            "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "AdapterNameAlreadyInUse",
                                                "message": "There is already an adapter with the name 'Profinet IO Connector'.",
                                                "errorParams": {
                                                    "nameInUse": "Profinet IO Connector"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Adapters"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AdapterNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Delete an adapter.",
                    "description": "Delete a specific adapter. Only not locked adapers with no variables can be deleted.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "adapter id to search for",
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
                                        "$ref": "#/components/schemas/Adapter"
                                    },
                                    "example": {
                                        "id": "0cb25043c8bb47de835b2573285862da",
                                        "name": "Simatic Connector",
                                        "type": "simaticadapter",
                                        "locked": false,
                                        "active": false,
                                        "isDefault": false,
                                        "canBrowse": true,
                                        "connected": false,
                                        "config": {
                                            "brokerURL": "tcp://ie-databus:1883",
                                            "username": "edge",
                                            "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "IsUsed": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 7,
                                                "errorKey": "AdapterDeleteFailed_IsUsed",
                                                "message": "Adapters which are in use cannot be deleted.",
                                                "debugInfo": {
                                                    "method": "DELETE",
                                                    "route": "/DataService/Adapters/{id}"
                                                }
                                            }
                                        },
                                        "Locked": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 6,
                                                "errorKey": "AdapterDeleteFailed_IsLocked",
                                                "message": "System adapter can not be deleted.",
                                                "debugInfo": {
                                                    "method": "DELETE",
                                                    "route": "/DataService/Adapters/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AdapterNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Adapters/{id}/browse": {
                "get": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Browse adapter.",
                    "description": "Browse an active adapter that supports browsing. All available tags will be returned.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "profinet",
                            "in": "path",
                            "description": "adapter id to search for",
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
                                            "tags": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "connectionName": {
                                                            "type": "string",
                                                            "example": "profinet"
                                                        },
                                                        "tagName": {
                                                            "type": "string",
                                                            "example": "Int1"
                                                        },
                                                        "topic": {
                                                            "type": "string",
                                                            "example": "profinet::Int1::8::4"
                                                        },
                                                        "tagType": {
                                                            "type": "string",
                                                            "example": "DInt"
                                                        },
                                                        "dataType": {
                                                            "type": "string",
                                                            "example": "Int32"
                                                        }
                                                    }
                                                }
                                            },
                                            "debugInfo": {
                                                "type": "object",
                                                "properties": {
                                                    "hint": {
                                                        "oneOf": [
                                                            {
                                                                "type": "string",
                                                                "example": "Adapter is not active."
                                                            },
                                                            {
                                                                "type": "string",
                                                                "example": "Adapter does not support browsing."
                                                            },
                                                            {
                                                                "type": "string",
                                                                "example": "Active adapter not found."
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "examples": {
                                        "Profinet": {
                                            "value": {
                                                "tags": [
                                                    {
                                                        "connectionName": "profinet",
                                                        "tagName": "Int1",
                                                        "topic": "profinet::Int1::8::4",
                                                        "tagType": "DInt",
                                                        "dataType": "Int32"
                                                    }
                                                ]
                                            }
                                        },
                                        "Grpc": {
                                            "value": {
                                                "tags": [
                                                    {
                                                        "connectionName": "CS-Simulation-Connector",
                                                        "tagName": "Int16Saw",
                                                        "topic": "CS-Simulation-Connector::Int16Saw::23::8",
                                                        "tagType": "",
                                                        "dataType": "Int16"
                                                    }
                                                ]
                                            }
                                        },
                                        "SystemInfo": {
                                            "value": {
                                                "tags": [
                                                    {
                                                        "connectionName": "heapStatistics",
                                                        "tagName": "TotalHeapSize",
                                                        "topic": "total_heap_size",
                                                        "tagType": "",
                                                        "dataType": "Double"
                                                    }
                                                ]
                                            }
                                        },
                                        "Not active": {
                                            "value": {
                                                "tags": [],
                                                "debugInfo": {
                                                    "hint": "Adapter is not active."
                                                }
                                            }
                                        },
                                        "No browsing": {
                                            "value": {
                                                "tags": [],
                                                "debugInfo": {
                                                    "hint": "Adapter does not support browsing."
                                                }
                                            }
                                        },
                                        "Not found": {
                                            "value": {
                                                "tags": [],
                                                "debugInfo": {
                                                    "hint": "Active adapter not found."
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AdapterNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/AdapterDiscovery": {
                "get": {
                    "tags": [
                        "Adapters"
                    ],
                    "summary": "Get all available adapters.",
                    "description": "Search and return all available adapters. Only returns available mqtt (simaticadapter) and grpc (connectivitysuite). If the adapter already exists, the current adapter is returned.",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Adapter"
                                        }
                                    },
                                    "examples": {
                                        "Empty": {
                                            "value": [],
                                            "description": "No available adapters found."
                                        },
                                        "Existing": {
                                            "value": [
                                                {
                                                    "id": "profinet",
                                                    "name": "Profinet IO Connector",
                                                    "type": "simaticadapter",
                                                    "locked": true,
                                                    "active": false,
                                                    "isDefault": false,
                                                    "canBrowse": true,
                                                    "config": {
                                                        "brokerURL": "tcp://ie-databus:1883",
                                                        "username": "",
                                                        "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                                                    }
                                                }
                                            ],
                                            "description": "An existing adapter was found."
                                        },
                                        "New": {
                                            "value": [
                                                {
                                                    "id": "",
                                                    "name": "Profinet IO Connector",
                                                    "type": "simaticadapter",
                                                    "locked": true,
                                                    "active": false,
                                                    "isDefault": false,
                                                    "canBrowse": true,
                                                    "config": {
                                                        "brokerURL": "tcp://ie-databus:1883",
                                                        "username": "",
                                                        "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                                                    }
                                                }
                                            ],
                                            "description": "An unknown adapter was found."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Adapters/Size": {
                "get": {
                    "summary": "Get used disk space by adapters.",
                    "description": "Return the size of the adapters folder.",
                    "tags": [
                        "Adapters"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aggregations": {
                "get": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Get all aggregations",
                    "description": "Get a list of aggregations, aggregations can be filtered by variable ids",
                    "parameters": [
                        {
                            "name": "variableIds",
                            "in": "query",
                            "schema": {
                                "type": "string"
                            },
                            "description": "The variable ids have to be specified as JSON array"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/AggregationObject"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Create an aggregation.",
                    "description": "Creates a new aggregation of an existing variable.<br>Cycle must be unique and only Second, Minute, Hour and Day are currently supported as base.<br>Allowed values for factor depend on base.<br> For 'Duration' and 'Occurrence' the aggregate options must be set.<br>",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AggregationObject"
                                },
                                "example": {
                                    "aggregation": "Sum",
                                    "sourceId": "39e32d19d95846f8b6a1b520893707fc",
                                    "cycle": {
                                        "base": "hour",
                                        "factor": 4
                                    },
                                    "provideAsVariable": false,
                                    "publishMqtt": false
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
                                        "$ref": "#/components/schemas/AggregationObject"
                                    },
                                    "examples": {
                                        "Aggregation": {
                                            "$ref": "#/components/examples/AggregationExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "VariableNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.sourceId is invalid: Variable not found.",
                                                "errorParams": {
                                                    "reason": "Variable not found.",
                                                    "what": "body.sourceId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "OptionsNeeded": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.aggregateOptions is invalid: statusValues needed.",
                                                "errorParams": {
                                                    "reason": "statusValues needed.",
                                                    "what": "body.aggregateOptions"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "InvalidCycleSecond": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle.factor is invalid: Allowed values are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30 seconds.",
                                                "errorParams": {
                                                    "reason": "Allowed values are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30 seconds.",
                                                    "what": "body.cycle.factor"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "InvalidCycleMinute": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle.factor is invalid: Allowed values are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30 minutes.",
                                                "errorParams": {
                                                    "reason": "Allowed values are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30 minutes.",
                                                    "what": "body.cycle.factor"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "InvalidCycleHour": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle.factor is invalid: Allowed values are 1, 2, 3, 4, 6, 8 and 12 hours.",
                                                "errorParams": {
                                                    "reason": "Allowed values are 1, 2, 3, 4, 6, 8 and 12 hours.",
                                                    "what": "body.cycle.factor"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "InvalidCycleDay": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle.factor is invalid: Allowed values are 1 day.",
                                                "errorParams": {
                                                    "reason": "Allowed values are 1 day.",
                                                    "what": "body.cycle.factor"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "InvalidCycleBase": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle.base is invalid: Allowed values are second, minute, hour and day.",
                                                "errorParams": {
                                                    "reason": "Allowed values are second, minute, hour and day.",
                                                    "what": "body.cycle.base"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        },
                                        "DuplicateCycle": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.cycle is invalid: There is already an aggregation with this cycle.",
                                                "errorParams": {
                                                    "reason": "There is already an aggregation with this cycle.",
                                                    "what": "body.cycle"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aggregations/{id}": {
                "get": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Read an aggregation",
                    "description": "Return the specified aggregation.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aggregation id to search for",
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
                                        "$ref": "#/components/schemas/Aggregation"
                                    },
                                    "examples": {
                                        "AggregationObject": {
                                            "$ref": "#/components/examples/AggregationExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AggregationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Update an aggregation.",
                    "description": "Update the specified aggregation. Only allowed to update provideAsVariable and publishMqtt",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aggregation id to search for",
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
                                    "$ref": "#/components/schemas/AggregationObject"
                                },
                                "example": {
                                    "aggregation": "Sum",
                                    "sourceId": "39e32d19d95846f8b6a1b520893707fc",
                                    "cycle": {
                                        "base": "hour",
                                        "factor": 4
                                    },
                                    "provideAsVariable": false,
                                    "publishMqtt": false
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
                                        "$ref": "#/components/schemas/AggregationObject"
                                    },
                                    "examples": {
                                        "Aggregation": {
                                            "$ref": "#/components/examples/AggregationExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "VariableNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.sourceId is invalid: Variable not found.",
                                                "errorParams": {
                                                    "reason": "Variable not found.",
                                                    "what": "body.sourceId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations/{id}"
                                                }
                                            }
                                        },
                                        "UpdateNotSupported": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.sourceId is invalid: Update not supported.",
                                                "errorParams": {
                                                    "reason": "Update not supported.",
                                                    "what": "body.sourceId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aggregations/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AggregationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Delete an aggregation.",
                    "description": "Delets the specified aggregation. All generated data is also deleted.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aggregation id to search for",
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
                                        "$ref": "#/components/schemas/AggregationObject"
                                    },
                                    "examples": {
                                        "Aggregation": {
                                            "$ref": "#/components/examples/AggregationExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AggregationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aggregations/{id}/Reset": {
                "get": {
                    "tags": [
                        "Aggregations"
                    ],
                    "summary": "Reset an aggregation",
                    "description": "Delete all generated data of the specified aggregation.",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "aggregation id to search for",
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
                                "text/plain": {
                                    "example": true
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AggregationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aggregations/Size": {
                "get": {
                    "summary": "Get used disk space by aggregations.",
                    "description": "Return the size of the aggregation folder.",
                    "tags": [
                        "Aggregations"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
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
                    "description": "Get a list of Aspects. Aspects can be filtered by aspectId or assetId. If no filter is specified, all aspects will be returned. It is not supported to specify more than one filter parameter.",
                    "parameters": [
                        {
                            "name": "aspectIds",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "example": [
                                "53abb2fdc0da4c24b84b735930c7b9c8"
                            ],
                            "description": "Filter the aspect list by aspectIds."
                        },
                        {
                            "name": "assetIds",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "example": [
                                "d0df2a40afd64671bda7b53ce8f08ef8"
                            ],
                            "description": "Filter the aspect list by assetIds."
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
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "TooManyFilter": {
                                            "$ref": "#/components/examples/TooManyFilterExample"
                                        }
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
                    "description": "Create a new aspect. If the aspectTypeId is set, the according variables will be created. Name must be unique in the provided asset and not empty.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Aspect"
                                },
                                "example": {
                                    "aspectName": "AspectName",
                                    "assetId": "0",
                                    "aspectTypeId": "99e92370657c4d689a9a3c76964ab65c"
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
                                    "examples": {
                                        "WithType": {
                                            "$ref": "#/components/examples/AspectWithTypeExample"
                                        },
                                        "WithOutType": {
                                            "$ref": "#/components/examples/AspectWithoutTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "AdapterNameAlreadyInUse",
                                                "message": "The asset 'edge' has already an aspect with the name 'Aspect'.",
                                                "errorParams": {
                                                    "asset": "edge",
                                                    "nameInUse": "Aspect"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Aspects"
                                                }
                                            }
                                        },
                                        "AssetNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Aspect.assetId is invalid: Asset not found.",
                                                "errorParams": {
                                                    "reason": "Asset not found.",
                                                    "what": "Aspect.assetId"
                                                },
                                                "debugInfo": {
                                                    "aspectId": "",
                                                    "aspectName": "NewAspect",
                                                    "assetId": "cb4379a33d0c4b98b1babc37b5c9820c",
                                                    "method": "POST",
                                                    "route": "/DataService/Aspects"
                                                }
                                            }
                                        },
                                        "AspectTypeNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Aspect.aspectTypeId is invalid: AspectType not found.",
                                                "errorParams": {
                                                    "reason": "AspectType not found.",
                                                    "what": "Aspect.aspectTypeId"
                                                },
                                                "debugInfo": {
                                                    "aspectId": "",
                                                    "aspectName": "NewAspect",
                                                    "aspectTypeId": "NotFoundType",
                                                    "method": "POST",
                                                    "route": "/DataService/Aspects"
                                                }
                                            }
                                        }
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
                    "description": "Read a specific aspect with the id from path.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect id to search for",
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
                                    "examples": {
                                        "WithoutType": {
                                            "$ref": "#/components/examples/AspectWithoutTypeExample"
                                        },
                                        "WithType": {
                                            "$ref": "#/components/examples/AspectWithTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectNotFoundExample"
                                        }
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
                    "description": "Update a specific aspect. Name must be unique in the provided asset. The aspectType cannot be changed.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect id to search for",
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
                                    "aspectName": "AspectName",
                                    "assetId": "0",
                                    "aspectTypeId": null
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
                                    "examples": {
                                        "WithType": {
                                            "$ref": "#/components/examples/AspectWithTypeExample"
                                        },
                                        "WithoutType": {
                                            "$ref": "#/components/examples/AspectWithoutTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "AdapterNameAlreadyInUse",
                                                "message": "The asset 'edge' has already an aspect with the name 'Aspect'.",
                                                "errorParams": {
                                                    "asset": "edge",
                                                    "nameInUse": "Aspect"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Aspects/{id}"
                                                }
                                            }
                                        },
                                        "AssetNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Aspect.assetId is invalid: Asset not found.",
                                                "errorParams": {
                                                    "reason": "Asset not found.",
                                                    "what": "Aspect.assetId"
                                                },
                                                "debugInfo": {
                                                    "aspectId": "",
                                                    "aspectName": "NewAspect",
                                                    "assetId": "cb4379a33d0c4b98b1babc37b5c9820c",
                                                    "method": "PUT",
                                                    "route": "/DataService/Aspects/{id}"
                                                }
                                            }
                                        },
                                        "NotSupported": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Aspect.aspectTypeId is invalid: Not supported to change the AspectType.",
                                                "errorParams": {
                                                    "reason": "Not supported to change the AspectType.",
                                                    "what": "Aspect.aspectTypeId"
                                                },
                                                "debugInfo": {
                                                    "aspectId": "099fdb1ca4fd4829a7afdeff7091ee0c",
                                                    "aspectName": "TestAT1",
                                                    "aspectTypeId": "123",
                                                    "method": "PUT",
                                                    "route": "/DataService/Aspects/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectNotFoundExample"
                                        }
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
                    "description": "Delete a specific asset. All data retentions and variables of this aspect will also be deleted.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect id to search for",
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
                                    "examples": {
                                        "WithoutType": {
                                            "$ref": "#/components/examples/AspectWithoutTypeExample"
                                        },
                                        "With": {
                                            "$ref": "#/components/examples/AspectWithoutTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects/Size": {
                "get": {
                    "summary": "Get used disk space by aspects.",
                    "description": "Return the size of the aspects folder.",
                    "tags": [
                        "Aspects"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects/Bulk/Create": {
                "post": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Create a set of aspects.",
                    "description": "Create a set of new aspects. If the aspectTypeId is set, the according variables will be created. Name must be unique in the provided assets and not empty.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Aspect"
                                    }
                                },
                                "example": [
                                    {
                                        "aspectName": "AspectName1",
                                        "assetId": "0",
                                        "aspectTypeId": ""
                                    },
                                    {
                                        "aspectName": "AspectName2",
                                        "assetId": "0",
                                        "aspectTypeId": ""
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AspectBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AspectBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects/Bulk/Update": {
                "post": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Update a set of aspects.",
                    "description": "Update a set of aspects.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Aspect"
                                    }
                                },
                                "example": [
                                    {
                                        "aspectId": "53abb2fdc0da4c24b84b735930c7b9c8",
                                        "aspectName": "AspectName1",
                                        "assetId": "0",
                                        "aspectTypeId": ""
                                    },
                                    {
                                        "aspectId": "099fdb1ca4fd4829a7afdeff7091ee02",
                                        "aspectName": "AspectName2",
                                        "assetId": "0",
                                        "aspectTypeId": ""
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AspectBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AspectBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Aspects/Bulk/Delete": {
                "post": {
                    "tags": [
                        "Aspects"
                    ],
                    "summary": "Delete a set of aspects.",
                    "description": "Delete a set of aspects.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "example": [
                                    "53abb2fdc0da4c24b84b735930c7b9c8",
                                    "099fdb1ca4fd4829a7afdeff7091ee02"
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AspectBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AspectBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/AspectTypes": {
                "get": {
                    "tags": [
                        "AspectTypes"
                    ],
                    "summary": "Get all aspect types.",
                    "description": "Get a list of aspect types. It can be configured to also return the according aspect type variables.",
                    "parameters": [
                        {
                            "name": "includeVariables",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            },
                            "description": "If true, return also all variables of the aspect type."
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/AspectType"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "AspectTypes"
                    ],
                    "summary": "Create an aspect type.",
                    "description": "Create a non system aspect type together with its according variables. Names must be unique",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AspectType"
                                },
                                "example": {
                                    "name": "Turbine",
                                    "variables": [
                                        {
                                            "name": "Speed",
                                            "dataType": "Double",
                                            "unit": "Hz"
                                        }
                                    ]
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
                                    "examples": {
                                        "AspectType": {
                                            "$ref": "#/components/examples/AspectTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 34,
                                                "errorKey": "AspectTypeNameAlreadyInUse",
                                                "message": "There is already an aspect type with the name 'Turbine'.",
                                                "errorParams": {
                                                    "nameInUse": "Turbine"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/AspectTypes"
                                                }
                                            }
                                        },
                                        "DuplicateName": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 34,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter AspectType.variables[1].name is invalid: The name is already in use.",
                                                "errorParams": {
                                                    "reason": "The name is already in use.",
                                                    "what": "AspectType.variables[1].name"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/AspectTypes"
                                                }
                                            }
                                        },
                                        "SystemType": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter isSystemType is invalid: It is not allowed to create a system type.",
                                                "errorParams": {
                                                    "reason": "It is not allowed to create a system type.",
                                                    "what": "isSystemType"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/AspectTypes"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/AspectTypes/{id}": {
                "get": {
                    "tags": [
                        "AspectTypes"
                    ],
                    "summary": "Read an aspect type.",
                    "description": "Read a specific aspect type. It can be configured to also return the according aspect type variables.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect type id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "includeVariables",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            },
                            "description": "If true, return also all variables of the aspect type."
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AspectType"
                                    },
                                    "examples": {
                                        "AspectType": {
                                            "$ref": "#/components/examples/AspectTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectTypeNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "AspectTypes"
                    ],
                    "summary": "Update an aspect type.",
                    "description": "Update a non system aspect type together with its variables. All variables and aspects created from this template will be adapted accordingly. Ids for variable names have to be provided, or else the existing will be deleted. Names must be unique",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect type id to search for",
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
                                    "$ref": "#/components/schemas/AspectType"
                                },
                                "example": {
                                    "name": "Turbine",
                                    "variables": [
                                        {
                                            "id": "4ae41b7faaf54d64a6d332f8dccb6a6c",
                                            "name": "Speed",
                                            "dataType": "Double",
                                            "unit": "Hz"
                                        }
                                    ]
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
                                    "examples": {
                                        "AspectType": {
                                            "$ref": "#/components/examples/AspectTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 34,
                                                "errorKey": "AspectTypeNameAlreadyInUse",
                                                "message": "There is already an aspect type with the name 'Turbine'.",
                                                "errorParams": {
                                                    "nameInUse": "Turbine"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/AspectTypes/{id}"
                                                }
                                            }
                                        },
                                        "DuplicateName": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 34,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter AspectType.variables[1].name is invalid: The name is already in use.",
                                                "errorParams": {
                                                    "reason": "The name is already in use.",
                                                    "what": "AspectType.variables[1].name"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/AspectTypes/{id}"
                                                }
                                            }
                                        },
                                        "SystemType": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter isSystemType is invalid: It is not allowed to update a system type.",
                                                "errorParams": {
                                                    "reason": "It is not allowed to update a system type.",
                                                    "what": "isSystemType"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/AspectTypes/{id}"
                                                }
                                            }
                                        },
                                        "InvalidAspectTypeVariable": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter AspectType.variables[0].id is invalid: AspectTypeVariable not found.",
                                                "errorParams": {
                                                    "reason": "AspectTypeVariable not found.",
                                                    "what": "AspectType.variables[0].id"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/AspectTypes/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectTypeNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "AspectTypes"
                    ],
                    "summary": "Delete a non system aspect type, which is not used.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "aspect type id to search for",
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
                                    "examples": {
                                        "AspectType": {
                                            "$ref": "#/components/examples/AspectTypeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AspectTypeNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/AspectTypes/Size": {
                "get": {
                    "summary": "Get used disk space by aspect types.",
                    "description": "Return the size of the aspectTypes folder.",
                    "tags": [
                        "AspectTypes"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets": {
                "get": {
                    "tags": [
                        "Assets"
                    ],
                    "summary": "Get all assets.",
                    "description": "Get a list of assets. Assets can be filtered by assetId. Breadcrumb and children can be added to the response if specific assets are requested.",
                    "parameters": [
                        {
                            "name": "assetIds",
                            "description": "Filter to get only a specified subset of assets.",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "description": "Array of assetId strings encoded in JSON.",
                                "example": "[\"0\",\"d0df2a40afd64671bda7b53ce8f08ef8\"]"
                            }
                        },
                        {
                            "name": "includeChildren",
                            "description": "Only allowed if assetIds are specified.",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "description": "Only allowed if assetIds are specified.",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
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
                                            "assets": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/Asset"
                                                }
                                            }
                                        }
                                    },
                                    "examples": {
                                        "All assets": {
                                            "value": {
                                                "assets": [
                                                    {
                                                        "assetId": "0",
                                                        "name": "edge",
                                                        "parentId": "",
                                                        "sortOrder": 0,
                                                        "hasChildren": true
                                                    },
                                                    {
                                                        "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                        "name": "TopAsset",
                                                        "parentId": "0",
                                                        "sortOrder": 0,
                                                        "hasChildren": false
                                                    }
                                                ]
                                            }
                                        },
                                        "Include children": {
                                            "value": {
                                                "assets": [
                                                    {
                                                        "assetId": "0",
                                                        "name": "edge",
                                                        "parentId": "",
                                                        "sortOrder": 0,
                                                        "hasChildren": true,
                                                        "children": [
                                                            {
                                                                "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                                "name": "TopAsset",
                                                                "parentId": "0",
                                                                "sortOrder": 0,
                                                                "hasChildren": false
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        "Include breadcrumb": {
                                            "value": {
                                                "assets": [
                                                    {
                                                        "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                        "name": "TopAsset",
                                                        "parentId": "0",
                                                        "sortOrder": 0,
                                                        "hasChildren": false,
                                                        "breadcrumb": [
                                                            {
                                                                "assetId": "0",
                                                                "name": "edge",
                                                                "parentId": "",
                                                                "sortOrder": 0,
                                                                "hasChildren": true
                                                            },
                                                            {
                                                                "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                                "name": "TopAsset",
                                                                "parentId": "0",
                                                                "hasChildren": true,
                                                                "sortOrder": 0
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "IncludeNotAvailable": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter query.includeBreadcrumb is invalid: Not supported when requesting all assets.",
                                                "errorParams": {
                                                    "reason": "Not supported when requesting all assets.",
                                                    "what": "query.includeBreadcrumb"
                                                },
                                                "debugInfo": {
                                                    "method": "GET",
                                                    "route": "/AssetService/Assets"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Create an asset.",
                    "description": "Create a new asset with an existing parent asset. Name within the parent must be unique.",
                    "tags": [
                        "Assets"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Asset"
                                },
                                "example": {
                                    "name": "TopAsset",
                                    "parentId": "0"
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
                                    "examples": {
                                        "Asset": {
                                            "$ref": "#/components/examples/AssetExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 36,
                                                "errorKey": "AssetNameAlreadyInUse",
                                                "message": "There is already an asset aspect with the name 'TopAsset'.",
                                                "errorParams": {
                                                    "nameInUse": "TopAsset"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/AssetService/Assets"
                                                }
                                            }
                                        },
                                        "ParentNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.parentId is invalid: Asset not found.",
                                                "errorParams": {
                                                    "reason": "Asset not found.",
                                                    "what": "body.parentId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/AssetService/Assets"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{id}": {
                "get": {
                    "summary": "Read an asset.",
                    "description": "Read an specific asset. Breadcrumb and children can be added to the response.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "asset id to search for",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "includeChildren",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
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
                                    "examples": {
                                        "Asset": {
                                            "$ref": "#/components/examples/AssetExample"
                                        },
                                        "Include children": {
                                            "value": {
                                                "assetId": "0",
                                                "name": "edge",
                                                "parentId": "",
                                                "sortOrder": 0,
                                                "hasChildren": true,
                                                "children": [
                                                    {
                                                        "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                        "name": "TopAsset",
                                                        "parentId": "0",
                                                        "sortOrder": 0,
                                                        "hasChildren": false
                                                    }
                                                ]
                                            }
                                        },
                                        "Include breadcrumb": {
                                            "value": {
                                                "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                "name": "TopAsset",
                                                "parentId": "0",
                                                "sortOrder": 0,
                                                "hasChildren": false,
                                                "breadcrumb": [
                                                    {
                                                        "assetId": "0",
                                                        "name": "edge",
                                                        "parentId": "",
                                                        "sortOrder": 0,
                                                        "hasChildren": true
                                                    },
                                                    {
                                                        "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                        "name": "TopAsset",
                                                        "parentId": "0",
                                                        "hasChildren": true,
                                                        "sortOrder": 0
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "summary": "Update an asset.",
                    "description": "Change name, parent or sortOrder of asset. Name within the parent must be unique. If parent and sortOrder will be changed with the same call, only the parent will be adapted and the asset appended at the end of the existing list.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "asset id to search for",
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
                                    "$ref": "#/components/schemas/Asset"
                                },
                                "example": {
                                    "name": "TopAsset",
                                    "parentId": "0",
                                    "sortOrder": 0
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
                                    "examples": {
                                        "Asset": {
                                            "$ref": "#/components/examples/AssetExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 36,
                                                "errorKey": "AssetNameAlreadyInUse",
                                                "message": "There is already an asset aspect with the name 'TopAsset'.",
                                                "errorParams": {
                                                    "nameInUse": "TopAsset"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/AssetService/Assets/{id}"
                                                }
                                            }
                                        },
                                        "ParentNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.parentId is invalid: Asset not found.",
                                                "errorParams": {
                                                    "reason": "Asset not found.",
                                                    "what": "body.parentId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/AssetService/Assets"
                                                }
                                            }
                                        },
                                        "RootAssetMove": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.parentId is invalid: The root asset can not be moved.",
                                                "errorParams": {
                                                    "reason": "The root asset can not be moved.",
                                                    "what": "body.parentId"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/AssetService/Assets/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete an asset.",
                    "description": "Delete a specific asset. All sub assets, aspect, variables and data retentions are deleted recursively.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "asset id to search for",
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
                                    "examples": {
                                        "Asset": {
                                            "$ref": "#/components/examples/AssetExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Root": {
                "get": {
                    "summary": "Get the root asset.",
                    "description": "The root asset is created automatically. It can not be deleted. Returns root asset if defined its children and breadcrumb.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "includeChildren",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "includeBreadcrumb",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
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
                                    "examples": {
                                        "RootAsset": {
                                            "$ref": "#/components/examples/AssetRootWithChildrenExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{id}/children": {
                "get": {
                    "summary": "Read all child asset.",
                    "description": "Read all child assets of a specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
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
                                    "example": {
                                        "assets": [
                                            {
                                                "id": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                "name": "TopAsset",
                                                "parentId": "0",
                                                "sortOrder": 0,
                                                "hasChildren": false
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{id}/decendants": {
                "get": {
                    "summary": "Read all descendent assets.",
                    "description": "Read all descendent assets of a specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
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
                                    "example": {
                                        "assets": [
                                            {
                                                "id": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                "name": "TopAsset",
                                                "parentId": "0",
                                                "sortOrder": 0,
                                                "hasChildren": false
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/{id}/breadcrumb": {
                "get": {
                    "summary": "Read all breadcrumb.",
                    "description": "Read all breadcrumb assets of a specified asset.",
                    "tags": [
                        "Assets"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
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
                                    "example": {
                                        "assets": [
                                            {
                                                "assetId": "0",
                                                "name": "edge",
                                                "parentId": "",
                                                "hasChildren": true,
                                                "sortOrder": 0
                                            },
                                            {
                                                "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                                "name": "TopAsset",
                                                "parentId": "0",
                                                "hasChildren": true,
                                                "sortOrder": 0
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Tree": {
                "get": {
                    "summary": "Get the asset tree.",
                    "description": "Get all assets, build together as a tree.",
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
                                    },
                                    "examples": {
                                        "AssetTree": {
                                            "$ref": "#/components/examples/AssetRootWithChildrenExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Size": {
                "get": {
                    "summary": "Get used disk space by assets.",
                    "description": "Return the size of the assets folder.",
                    "tags": [
                        "Assets"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Bulk/Create": {
                "post": {
                    "tags": [
                        "Assets"
                    ],
                    "summary": "Create a set of assets.",
                    "description": "Create a set of new assets. If the aspectTypeId is set, the according variables will be created. Name must be unique in the provided assets and not empty.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Asset"
                                    }
                                },
                                "example": [
                                    {
                                        "name": "AssetName1",
                                        "parentId": "0"
                                    },
                                    {
                                        "name": "AssetName2",
                                        "parentId": "0"
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AssetBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Bulk/Update": {
                "post": {
                    "tags": [
                        "Assets"
                    ],
                    "summary": "Update a set of assets.",
                    "description": "Update a set of assets.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Asset"
                                    }
                                },
                                "example": [
                                    {
                                        "id": "d0df2a40afd64671bda7b53ce8f08ef8",
                                        "name": "AssetName1",
                                        "parentId": "0",
                                        "sortOrder": 0,
                                        "hasChildren": false
                                    },
                                    {
                                        "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                                        "name": "AssetName2",
                                        "parentId": "0",
                                        "sortOrder": 1,
                                        "hasChildren": false
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AssetBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/AssetService/Assets/Bulk/Delete": {
                "post": {
                    "tags": [
                        "Assets"
                    ],
                    "summary": "Delete a set of assets.",
                    "description": "Delete a set of assets.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "example": [
                                    "53abb2fdc0da4c24b84b735930c7b9c8",
                                    "099fdb1ca4fd4829a7afdeff7091ee02"
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AssetBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AssetBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Backup/Config": {
                "get": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Get the configuration backup.",
                    "description": "Download the whole configuration backup. This includes Adapters, Aspects, AspectTypes, Assets, Aggregations, DataRetentions and Variables. This is configured as an automatic file download",
                    "parameters": [
                        {
                            "name": "encrypted",
                            "in": "query",
                            "description": "Specifies if the backup should be encrypted.",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "password",
                            "in": "query",
                            "description": "Required if the backup should be encrypted. This password is needed when restoring the backup.",
                            "schema": {
                                "type": "string",
                                "example": "1234"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Configuration as json file",
                            "content": {
                                "application/json": {
                                    "examples": {
                                        "Readable": {
                                            "value": {
                                                "dataBusCredentials": {
                                                    "url": "tcp:://ie-databus:1883",
                                                    "username": "edge",
                                                    "usercode": "ZWRnZQ=="
                                                },
                                                "adapters": [],
                                                "assets": [],
                                                "aspects": [],
                                                "variables": [],
                                                "dataRetentions": [],
                                                "dataDestinations": [],
                                                "aggregations": [],
                                                "aspectTypes": [],
                                                "aspectTypeVariables": []
                                            }
                                        },
                                        "Encrypted": {
                                            "value": {
                                                "data": "ABCDEFGHIJKLMNOPQRST"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Restore the configuration backup.",
                    "description": "Restore the whole configuration, this means every current configuration will be deleted, except system types, those are updated. If an error occurs, the existing setup will be restored.",
                    "parameters": [
                        {
                            "name": "fromIIH",
                            "in": "query",
                            "description": "This indicates that the restore call is coming from IIH. Only IIH should use this parameter.",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "password",
                            "in": "query",
                            "description": "Required if the backup is encrypted.",
                            "schema": {
                                "type": "string",
                                "example": "1234"
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "description": "This is the file download with GET",
                        "content": {
                            "application/json": {}
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
                        },
                        "400": {
                            "description": "Bad Request,<br>The examples are only a selection of the possible error values. Several consistency checks are made.",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "RootAssetNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Asset.parentId is invalid: Root asset not found.",
                                                "errorParams": {
                                                    "reason": "Root asset not found.",
                                                    "what": "Asset.parentId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "missingAssetId": "0",
                                                    "missingParentId": "",
                                                    "route": "/DataService/Backup/Config"
                                                }
                                            }
                                        },
                                        "AdapterIdMissing": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter Adapter.id is invalid: Id missing.",
                                                "errorParams": {
                                                    "reason": "Id missing.",
                                                    "what": "Adapter.id"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "name": "Simatic Connector",
                                                    "route": "/DataService/Backup/Config"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Backup/Data": {
                "get": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Get the data backup.",
                    "description": "Download the whole data backup. This includes all content from all variables and aggregation variables. This is configured as an automatic file download",
                    "responses": {
                        "200": {
                            "description": "Data as txt file with own format",
                            "content": {
                                "text/plain": {}
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Restore the data backup.",
                    "description": "Restore the data backup downloaded with GET request.",
                    "requestBody": {
                        "required": true,
                        "description": "This is the file download with GET.",
                        "content": {
                            "multipart/form-data": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "type": "string",
                                            "format": "text/plain"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success,<br>The possible errors are listet in the errors array, in the example are only a few possible errors listed.",
                            "content": {
                                "application/json": {
                                    "example": {
                                        "variables": [
                                            {
                                                "id": "75f4aa369aef4c4a8332e8bbe5ae57bf",
                                                "name": "Variable1",
                                                "type": "Double",
                                                "path": "edge/TopAsset",
                                                "count": 200
                                            }
                                        ],
                                        "errors": [
                                            "Line 100: Missing id",
                                            "Line 200: Variable with id 099fdb1ca4fd4829a7afdeff7091ee0c not found.",
                                            "Line 300: Failed to convert XXXXXXX to timestamp.",
                                            "Line 400: Tab delimited timestamp and value expected",
                                            "Line 500: Failed to convert XXX to qualitycode",
                                            "Line 600: Failed to convert double value X.X into a int8 value: Out of range (overflow)."
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Backup/Data/{id}": {
                "get": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Get the txt export of a single variable.",
                    "description": "Download the txt file of a variable or an aggregation variable. This is configured as an automatic file download",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly of 'from' is included in the result.",
                            "example": "2020-01-01T00:00:00.000Z",
                            "required": false,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "to",
                            "description": "End timestamp of the data query. A value with a timestamp exactly of 'to' is included in the result. Has to be greater than from.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": false,
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        {
                            "name": "includeAggregations",
                            "description": "If it is true, exported file includes data of aggregation variables.",
                            "required": false,
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Data as txt file which contains one variable data and optionally its aggregation data.",
                            "content": {
                                "text/plain": {}
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidTimeRange": {
                                            "$ref": "#/components/examples/DataInvalidTimeRangeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Backup"
                    ],
                    "summary": "Restore the exported txt file into a variable.",
                    "description": "Restore the txt file downloaded with variable export.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "description": "This is the txt file download with GET.",
                        "content": {
                            "multipart/form-data": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "data": {
                                            "type": "string",
                                            "format": "text/plain"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success,<br>The possible errors are listet in the errors array, in the example are only a few possible errors listed.",
                            "content": {
                                "application/json": {
                                    "example": {
                                        "variables": [
                                            {
                                                "id": "75f4aa369aef4c4a8332e8bbe5ae57bf",
                                                "name": "Variable1",
                                                "type": "Double",
                                                "path": "edge/TopAsset",
                                                "count": 200
                                            }
                                        ],
                                        "errors": [
                                            "Line 100: Variable header shouldn't exist in variable data file.",
                                            "Line 200: Missing or wrong aggregation type.",
                                            "Line 300: Failed to convert XXXXXXX to timestamp.",
                                            "Line 400: Tab delimited timestamp and value expected.",
                                            "Line 500: Failed to convert XXX to qualitycode.",
                                            "Line 600: Failed to convert double value X.X into a int8 value: Out of range (overflow)."
                                        ]
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
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
                    "tags": [
                        "Calculate"
                    ],
                    "summary": "Calculate an aggregated value.",
                    "description": "Calculate an aggregated value for several datasources. Currently all datasource types are handled as variables. Some aggregation are not supported for single value calculation (None, MinMaxTrend, Gantt, GanttView, StepDuration, ValueChanges).",
                    "parameters": [
                        {
                            "name": "usePrecalculatedData",
                            "in": "query",
                            "description": "If true, precalculated data will be used.",
                            "schema": {
                                "type": "boolean",
                                "default": true
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/CalculateRequest"
                                },
                                "example": {
                                    "from": "2022-08-16T12:00:00",
                                    "to": "2022-08-16T16:00:00",
                                    "dataSources": [
                                        {
                                            "id": "3a801b60917e4ca291ff027ba263697e",
                                            "type": "Variable",
                                            "aggregation": "Average"
                                        }
                                    ]
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
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/CalculateResult"
                                        }
                                    },
                                    "examples": {
                                        "Success": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "value": 2.5
                                                }
                                            ],
                                            "description": "Value could be succesfully calculated."
                                        },
                                        "No value": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "value": null
                                                }
                                            ],
                                            "description": "There was no value in the given time window."
                                        },
                                        "Not found": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "error": {
                                                        "service": "DataService",
                                                        "state": 404,
                                                        "stateText": "NotFound",
                                                        "errorCode": 4,
                                                        "errorKey": "NotFound",
                                                        "message": "The Variable with the id 3a801b60917e4ca291ff027ba263697e was not found.",
                                                        "errorParams": {
                                                            "id": "3a801b60917e4ca291ff027ba263697e",
                                                            "what": "Variable"
                                                        }
                                                    },
                                                    "value": null
                                                }
                                            ],
                                            "description": "Data source was not found."
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "InvalidAggregation": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body.dataSources[0].aggregation is invalid: The aggregation GanttView may not be used for single value calculation.",
                                                "errorParams": {
                                                    "reason": "The aggregation GanttView may not be used for single value calculation.",
                                                    "what": "body.dataSources[0].aggregation"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Calculate"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateTrend": {
                "post": {
                    "tags": [
                        "Calculate"
                    ],
                    "summary": "Calculate a trend of aggregated values.",
                    "description": "Calculate a trend of aggregated values for several datasources. Currently all datasource types are handled as variables.",
                    "parameters": [
                        {
                            "name": "usePrecalculatedData",
                            "in": "query",
                            "description": "If true, precalculated data will be used.",
                            "schema": {
                                "type": "boolean",
                                "default": true
                            }
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/CalculateTrendRequest"
                                },
                                "example": {
                                    "from": "2022-08-16T12:00:00",
                                    "to": "2022-08-16T16:00:00",
                                    "calculationTimeRange": 1,
                                    "dataSources": [
                                        {
                                            "id": "3a801b60917e4ca291ff027ba263697e",
                                            "type": "Variable",
                                            "aggregation": "Average"
                                        }
                                    ]
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
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/CalculateTrendResult"
                                        }
                                    },
                                    "examples": {
                                        "Success": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "values": [
                                                        {
                                                            "timestamp": "2022-08-17T08:00:00.000Z",
                                                            "value": 1
                                                        },
                                                        {
                                                            "timestamp": "2022-08-17T08:05:00.000Z",
                                                            "value": 2
                                                        },
                                                        {
                                                            "timestamp": "2022-08-17T08:10:00.000Z",
                                                            "value": 3
                                                        },
                                                        {
                                                            "timestamp": "2022-08-17T08:15:00.000Z",
                                                            "value": 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "No value": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "value": []
                                                }
                                            ],
                                            "description": "There was no value in the given time window."
                                        },
                                        "Not found": {
                                            "value": [
                                                {
                                                    "dataSource": {
                                                        "id": "3a801b60917e4ca291ff027ba263697e",
                                                        "type": "Variable",
                                                        "aggregation": "Average"
                                                    },
                                                    "error": {
                                                        "service": "DataService",
                                                        "state": 404,
                                                        "stateText": "NotFound",
                                                        "errorCode": 4,
                                                        "errorKey": "NotFound",
                                                        "message": "The Variable with the id 3a801b60917e4ca291ff027ba263697e was not found.",
                                                        "errorParams": {
                                                            "id": "3a801b60917e4ca291ff027ba263697e",
                                                            "what": "Variable"
                                                        }
                                                    },
                                                    "value": []
                                                }
                                            ],
                                            "description": "Data source was not found."
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateJobCollections": {
                "post": {
                    "summary": "Create calculate-job collection.",
                    "tags": [
                        "CalculateJobCollections"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "jobs": {
                                            "type": "array",
                                            "items": {
                                                "$ref": "#/components/schemas/CalculateJobRequest"
                                            }
                                        }
                                    }
                                },
                                "example": {
                                    "jobs": [
                                        {
                                            "from": "2022-08-16T12:00:00",
                                            "to": "2022-08-16T16:00:00",
                                            "mode": "Single",
                                            "calculationTimeRange": 1,
                                            "dataSource": {
                                                "id": "3a801b60917e4ca291ff027ba263697e",
                                                "type": "Variable",
                                                "aggregation": "None"
                                            }
                                        }
                                    ]
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
                                        "$ref": "#/components/schemas/CalculateJobCollectionResult"
                                    },
                                    "examples": {
                                        "CalculateJobCollectionResult": {
                                            "$ref": "#/components/examples/CalculateJobCollectionResultExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateJobCollections/Ids": {
                "get": {
                    "summary": "Get all job calculation ids",
                    "tags": [
                        "CalculateJobCollections"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "example": [
                                        "6b0e5e3f8dea409db6c44d6d8e3cf370",
                                        "9d387c1e92cc4abca6999869766f9f72"
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateJobCollections/{id}": {
                "get": {
                    "summary": "Get the state of a calculate-job collection.",
                    "tags": [
                        "CalculateJobCollections"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "fetchMode",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/FetchMode"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/CalculateJobCollectionResult"
                                    },
                                    "examples": {
                                        "Success": {
                                            "$ref": "#/components/examples/CalculateJobCollectionResultExample"
                                        },
                                        "Empty": {
                                            "value": {
                                                "jobCollectionId": "cb8c8cf6dac6428ea31ee1d6d96c1bce",
                                                "result": []
                                            },
                                            "description": "Returned if id was not found."
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidFetchParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Abort and delete calculate-job collection.",
                    "tags": [
                        "CalculateJobCollections"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
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
                                        "$ref": "#/components/schemas/SuccessResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/CalculateJobCollections/{id}/{jobIndex}": {
                "delete": {
                    "summary": "Abort a single calculate job of a calculate-job collection.",
                    "tags": [
                        "CalculateJobCollections"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "jobIndex",
                            "example": "1",
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
                                        "oneOf": [
                                            {
                                                "$ref": "#/components/schemas/SuccessResponse"
                                            },
                                            {
                                                "type": "string",
                                                "example": "false"
                                            }
                                        ]
                                    },
                                    "examples": {
                                        "Success": {
                                            "value": {
                                                "success": true
                                            }
                                        },
                                        "JobCollectionNotFound": {
                                            "value": {
                                                "success": true
                                            }
                                        },
                                        "jobIndexNotFound": {
                                            "value": "false"
                                        }
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
                    "description": "Get time series data of multiple variables.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableIds",
                            "description": "The variableIds have to be specified as JSON array of strings.",
                            "example": "[\"9d9ed88826854821884e17cdeeb98fa7\",\"87906f351b4844c4960bfc99d7e41dc3\"]",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly of 'from' is not included in the result.",
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
                            "description": "End timestamp of the data query. A value with a timestamp exactly of 'to' is included in the result. Has to be greater than from.",
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
                            "description": "Optional parameterto specify the maximum number of values to be returned for one variable. If not specified a default limit of 2000 is used. Has to be greater or equal than zero. If one variable has reached its limit, it can have an impact on the returned values of other variables, as the hasMoreData Object limits all data with its from timestamp.",
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
                            "example": "Ascending",
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
                                        "$ref": "#/components/schemas/DataResponseArray"
                                    },
                                    "examples": {
                                        "AllData": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:03:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:05:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:10:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:15:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        "LimitData": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                                        "values": []
                                                    }
                                                ],
                                                "hasMoreData": {
                                                    "from": "2022-08-17T08:02:00.000Z",
                                                    "to": "2022-08-17T09:00:00.000Z"
                                                }
                                            },
                                            "description": "The data limit is set to 2. The first variable is limited by 2 values and a hasMoreData object is created. This limits the second variable, as all their values are after the from timestamp of the hasMoreData object."
                                        },
                                        "ErrorNotFound": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "1432dae06c5f4008a4caa192cba073a61",
                                                        "values": [],
                                                        "error": {
                                                            "service": "DataService",
                                                            "state": 404,
                                                            "stateText": "NotFound",
                                                            "errorCode": 4,
                                                            "errorKey": "NotFound",
                                                            "message": "The Variable with the id 1432dae06c5f4008a4caa192cba073a61 was not found.",
                                                            "errorParams": {
                                                                "id": "1432dae06c5f4008a4caa192cba073a61",
                                                                "what": "Variable"
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        },
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidLimit": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter limit is invalid: Value less than zero not allowed.",
                                                "errorParams": {
                                                    "reason": "Value less than zero not allowed.",
                                                    "what": "limit"
                                                },
                                                "debugInfo": {
                                                    "method": "GET",
                                                    "route": "/DataService/Data"
                                                }
                                            }
                                        },
                                        "InvalidTimeRange": {
                                            "$ref": "#/components/examples/DataInvalidTimeRangeExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Write data of multiple variables.",
                    "description": "Write time series data of multiple variables.",
                    "tags": [
                        "Data"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Data"
                                    }
                                },
                                "example": [
                                    {
                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                        "values": [
                                            {
                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                "value": 2,
                                                "qualitycode": 192
                                            },
                                            {
                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                "value": 3,
                                                "qualitycode": 192
                                            },
                                            {
                                                "timestamp": "2022-08-17T08:03:00.000Z",
                                                "value": 4,
                                                "qualitycode": 192
                                            }
                                        ]
                                    },
                                    {
                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                        "values": [
                                            {
                                                "timestamp": "2022-08-17T08:05:00.000Z",
                                                "value": 2,
                                                "qualitycode": 192
                                            },
                                            {
                                                "timestamp": "2022-08-17T08:10:00.000Z",
                                                "value": 3,
                                                "qualitycode": 192
                                            },
                                            {
                                                "timestamp": "2022-08-17T08:15:00.000Z",
                                                "value": 4,
                                                "qualitycode": 192
                                            }
                                        ]
                                    }
                                ]
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
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidValue": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].values[0].value is invalid: Can not convert to datatype Int32.",
                                                "errorParams": {
                                                    "reason": "Can not convert to datatype Int32.",
                                                    "what": "body[0].values[0].value"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data"
                                                }
                                            }
                                        },
                                        "InvalidTimeStamp": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].values[0].timestamp is invalid: Date expected.",
                                                "errorParams": {
                                                    "reason": "Date expected.",
                                                    "what": "body[0].values[0].timestamp"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data"
                                                }
                                            }
                                        },
                                        "InvalidQualityCode": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].values[0].qualitycode is invalid: UInt16 expected (value range from 0 to 65535).",
                                                "errorParams": {
                                                    "reason": "UInt16 expected (value range from 0 to 65535).",
                                                    "what": "body[0].values[0].qualitycode"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete data of multiple variables.",
                    "description": "Delete time series data of multiple variables.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "variableIds",
                            "description": "The variableIds have to be specified as JSON array of strings.",
                            "example": "[\"9d9ed88826854821884e17cdeeb98fa7\",\"87906f351b4844c4960bfc99d7e41dc3\"]",
                            "required": true,
                            "in": "query",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly of 'from' is not included in the result.",
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
                            "description": "End timestamp of the data query. A value with a timestamp exactly of 'to' is included in the result. Has to be greater than from.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": true,
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
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        },
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidTimeRange": {
                                            "$ref": "#/components/examples/DataInvalidTimeRangeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/{id}": {
                "get": {
                    "summary": "Read data of a single variable.",
                    "description": "Get time series data of a single variable.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly of 'from' is not included in the result.",
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
                            "description": "End timestamp of the data query. A value with a timestamp exactly of 'to' is included in the result. Has to be greater than from.",
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
                            "description": "Optional parameterto specify the maximum number of values to be returned for one variable. If not specified a default limit of 2000 is used. Has to be greater or equal than zero. If one variable has reached its limit, it can have an impact on the returned values of other variables, as the hasMoreData Object limits all data with its from timestamp.",
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
                            "example": "Ascending",
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
                                        "$ref": "#/components/schemas/DataResponseArray"
                                    },
                                    "examples": {
                                        "AllData": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:03:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        "LimitData": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "hasMoreData": {
                                                    "from": "2022-08-17T08:02:00.000Z",
                                                    "to": "2022-08-17T09:00:00.000Z"
                                                }
                                            },
                                            "description": "The data limit is set to 2."
                                        },
                                        "ErrorNotFound": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "1432dae06c5f4008a4caa192cba073a61",
                                                        "values": [],
                                                        "error": {
                                                            "service": "DataService",
                                                            "state": 404,
                                                            "stateText": "NotFound",
                                                            "errorCode": 4,
                                                            "errorKey": "NotFound",
                                                            "message": "The Variable with the id 1432dae06c5f4008a4caa192cba073a61 was not found.",
                                                            "errorParams": {
                                                                "id": "1432dae06c5f4008a4caa192cba073a61",
                                                                "what": "Variable"
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        },
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidLimit": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter limit is invalid: Value less than zero not allowed.",
                                                "errorParams": {
                                                    "reason": "Value less than zero not allowed.",
                                                    "what": "limit"
                                                },
                                                "debugInfo": {
                                                    "method": "GET",
                                                    "route": "/DataService/Data/{id}"
                                                }
                                            }
                                        },
                                        "InvalidTimeRange": {
                                            "$ref": "#/components/examples/DataInvalidTimeRangeExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "summary": "Write data of a single variable.",
                    "description": "Write time series data of a single variable.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "variable id to search for",
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
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Value"
                                    }
                                },
                                "example": [
                                    {
                                        "timestamp": "2022-08-17T08:01:00.000Z",
                                        "value": 2,
                                        "qualitycode": 192
                                    },
                                    {
                                        "timestamp": "2022-08-17T08:02:00.000Z",
                                        "value": 3,
                                        "qualitycode": 192
                                    },
                                    {
                                        "timestamp": "2022-08-17T08:03:00.000Z",
                                        "value": 4,
                                        "qualitycode": 192
                                    }
                                ]
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
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidValue": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].value is invalid: Can not convert to datatype Int32.",
                                                "errorParams": {
                                                    "reason": "Can not convert to datatype Int32.",
                                                    "what": "body[0].value"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data/{id}"
                                                }
                                            }
                                        },
                                        "InvalidTimeStamp": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].timestamp is invalid: Date expected.",
                                                "errorParams": {
                                                    "reason": "Date expected.",
                                                    "what": "body[0].timestamp"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data/{id}"
                                                }
                                            }
                                        },
                                        "InvalidQualityCode": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter body[0].qualitycode is invalid: UInt16 expected (value range from 0 to 65535).",
                                                "errorParams": {
                                                    "reason": "UInt16 expected (value range from 0 to 65535).",
                                                    "what": "body[0].qualitycode"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Data/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete data of single variable.",
                    "description": "Delete time series data of a single variable.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "example": "1432dae06c5f4008a4caa192cba073a6",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of the data query. A value stored with a timestamp exactly of 'from' is not included in the result.",
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
                            "description": "End timestamp of the data query. A value with a timestamp exactly of 'to' is included in the result. Has to be greater than from.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": true,
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
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        },
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidTimeRange": {
                                            "$ref": "#/components/examples/DataInvalidTimeRangeExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/Size": {
                "get": {
                    "summary": "Get database size.",
                    "description": "Return the size of the internal database.",
                    "tags": [
                        "Data"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/{id}/Size": {
                "get": {
                    "summary": "Get data size.",
                    "description": "Return the size of one variable in the internal database.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "variable id to search for",
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
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/{id}/Count": {
                "get": {
                    "summary": "Count data.",
                    "description": "Count data for a selected variable within a time range.",
                    "tags": [
                        "Data"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "from",
                            "description": "Begin timestamp of data generation.",
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
                            "description": "End timestamp of data generation.",
                            "example": "2020-01-02T00:00:00.000Z",
                            "required": true,
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
                                        "type": "object",
                                        "properties": {
                                            "rowCount": {
                                                "type": "integer",
                                                "description": "number of values.",
                                                "example": 6
                                            },
                                            "size": {
                                                "type": "integer",
                                                "description": "size of data in bytes.",
                                                "example": 84
                                            },
                                            "formattedSize": {
                                                "type": "string",
                                                "description": "format size of data as string.",
                                                "example": "84.00 Byte"
                                            },
                                            "time": {
                                                "type": "integer",
                                                "description": "Elapsed time in microseconds to count.",
                                                "example": 16057
                                            },
                                            "formattedTime": {
                                                "type": "string",
                                                "description": "Elapsed time to count as formatted string.",
                                                "example": "1.606 milliseconds"
                                            },
                                            "speed": {
                                                "type": "integer",
                                                "description": "number of rows per second",
                                                "example": 3736
                                            },
                                            "formattedSpeed": {
                                                "type": "string",
                                                "description": "number of rows per second as formatted string",
                                                "example": "3736 rows/second"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Data/Delta": {
                "post": {
                    "summary": "Get data delta.",
                    "description": "Get the last values from a variable starting from a timestamp. The possible value from the timestamp will not be included in the return. The maximum number of value per variable is 2000. More values can be requested with another request with lastRequestTime from the last answer.",
                    "tags": [
                        "Data"
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
                                                "type": "string",
                                                "example": "9d9ed88826854821884e17cdeeb98fa7"
                                            },
                                            "lastRequestTime": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2022-08-17T08:01:00.000Z",
                                                "description": "optional timestamp, if no timestamp is delivered, only the last found value will be returned. The value will the same timestamp will not be included in the return."
                                            }
                                        }
                                    }
                                },
                                "example": [
                                    {
                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                        "lastRequestTime": "2022-08-17T08:00:00.000Z"
                                    },
                                    {
                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                        "lastRequestTime": "2022-08-17T08:00:00.000Z"
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DataResponseArray"
                                    },
                                    "examples": {
                                        "AllData": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:01:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:02:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:03:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ],
                                                        "lastRequestTime": "2022-08-17T08:03:00.000Z"
                                                    },
                                                    {
                                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:05:00.000Z",
                                                                "value": 2,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:10:00.000Z",
                                                                "value": 3,
                                                                "qualitycode": 192
                                                            },
                                                            {
                                                                "timestamp": "2022-08-17T08:15:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ],
                                                        "lastRequestTime": "2022-08-17T08:15:00.000Z"
                                                    }
                                                ]
                                            }
                                        },
                                        "NoLastRequestTime": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:03:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ],
                                                        "lastRequestTime": "2022-08-17T08:03:00.000Z"
                                                    },
                                                    {
                                                        "variableId": "87906f351b4844c4960bfc99d7e41dc3",
                                                        "values": [
                                                            {
                                                                "timestamp": "2022-08-17T08:15:00.000Z",
                                                                "value": 4,
                                                                "qualitycode": 192
                                                            }
                                                        ],
                                                        "lastRequestTime": "2022-08-17T08:15:00.000Z"
                                                    }
                                                ]
                                            }
                                        },
                                        "NoValues": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": [],
                                                        "lastRequestTime": "2022-08-17T08:15:00.000Z"
                                                    }
                                                ]
                                            },
                                            "description": "There at no values after the provided timestamp."
                                        },
                                        "NoValuesNoTimeStamp": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "9d9ed88826854821884e17cdeeb98fa7",
                                                        "values": []
                                                    }
                                                ]
                                            },
                                            "description": "No last request timestamp provided and there at no values at all."
                                        },
                                        "ErrorNotFound": {
                                            "value": {
                                                "data": [
                                                    {
                                                        "variableId": "1432dae06c5f4008a4caa192cba073a61",
                                                        "values": [],
                                                        "error": {
                                                            "service": "DataService",
                                                            "state": 404,
                                                            "stateText": "NotFound",
                                                            "errorCode": 4,
                                                            "errorKey": "NotFound",
                                                            "message": "The Variable with the id 1432dae06c5f4008a4caa192cba073a61 was not found.",
                                                            "errorParams": {
                                                                "id": "1432dae06c5f4008a4caa192cba073a61",
                                                                "what": "Variable"
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataDestination": {
                "get": {
                    "tags": [
                        "DataDestination"
                    ],
                    "summary": "Get all data destinations.",
                    "description": "Get a list of all available data destinations.",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "dataDestinations": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/DataDestination"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "DataDestination"
                    ],
                    "summary": "Create a new data destination.",
                    "description": "Create a new data destination. Name must be unique and not empty.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/DataDestination"
                                },
                                "example": {
                                    "name": "wccdev",
                                    "type": "mindsphere",
                                    "active": false,
                                    "config": {
                                        "tenantId": "wccdev",
                                        "clientId": "ninjatest",
                                        "region": "EU1",
                                        "appId": "wccdev-pdmcoreservice-1.0",
                                        "password": "",
                                        "connectorCertificate": {
                                            "fileName": "ConnectionCertificate.pem",
                                            "content": ""
                                        },
                                        "connectorKey": {
                                            "fileName": "ConnectionKey.key",
                                            "content": ""
                                        },
                                        "caCertificate": {
                                            "fileName": "MindSphereRootCA1.pem",
                                            "content": ""
                                        },
                                        "brokerUrl": "mindconnectmqtt.eu1.mindsphere.io",
                                        "port": 8883,
                                        "timeoutInSec": 1000,
                                        "publishIntervalInSec": 10,
                                        "retryCount": 5,
                                        "qos": 1
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
                                        "$ref": "#/components/schemas/DataDestination"
                                    },
                                    "examples": {
                                        "MindSphere": {
                                            "$ref": "#/components/examples/DataDestinationMdspExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "DataDestinationNameAlreadyInUse",
                                                "message": "There is already an data destination with the name 'wccdev'.",
                                                "errorParams": {
                                                    "nameInUse": "wccdev"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/DataDestination"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataDestination/{id}": {
                "get": {
                    "tags": [
                        "DataDestination"
                    ],
                    "summary": "Read a data destination.",
                    "description": "Read a specific data destination with the id from path.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3c49642087f2459fa705b24fa61a3bb9",
                            "in": "path",
                            "description": "data destination id to search for",
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
                                        "$ref": "#/components/schemas/DataDestination"
                                    },
                                    "examples": {
                                        "MindSphere": {
                                            "$ref": "#/components/examples/DataDestinationMdspExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataDestinationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "DataDestination"
                    ],
                    "summary": "Update a data destination.",
                    "description": "Update a specific data destination. Name must be unique and not empty. 'type' is readOnly.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3c49642087f2459fa705b24fa61a3bb9",
                            "in": "path",
                            "description": "data destination id to search for",
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
                                    "$ref": "#/components/schemas/DataDestination"
                                },
                                "example": {
                                    "name": "wccdev",
                                    "type": "mindsphere",
                                    "active": false,
                                    "config": {
                                        "tenantId": "wccdev",
                                        "clientId": "ninjatest",
                                        "region": "EU1",
                                        "appId": "wccdev-pdmcoreservice-1.0",
                                        "password": "",
                                        "connectorCertificate": {
                                            "fileName": "ConnectionCertificate.pem",
                                            "content": ""
                                        },
                                        "connectorKey": {
                                            "fileName": "ConnectionKey.key",
                                            "content": ""
                                        },
                                        "caCertificate": {
                                            "fileName": "MindSphereRootCA1.pem",
                                            "content": ""
                                        },
                                        "brokerUrl": "mindconnectmqtt.eu1.mindsphere.io",
                                        "port": 8883,
                                        "timeoutInSec": 1000,
                                        "publishIntervalInSec": 10,
                                        "retryCount": 5,
                                        "qos": 1
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
                                        "$ref": "#/components/schemas/Aspect"
                                    },
                                    "examples": {
                                        "MindSphere": {
                                            "$ref": "#/components/examples/DataDestinationMdspExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "description": "Test",
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 35,
                                                "errorKey": "DataDestinationNameAlreadyInUse",
                                                "message": "There is already an data destination with the name 'wccdev'.",
                                                "errorParams": {
                                                    "nameInUse": "wccdev"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/DataDestination"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataDestinationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "DataDestination"
                    ],
                    "summary": "Delete a data destination.",
                    "description": "Delete a specific data destination.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3c49642087f2459fa705b24fa61a3bb9",
                            "in": "path",
                            "description": "data destination id to search for",
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
                                        "$ref": "#/components/schemas/DataDestination"
                                    },
                                    "examples": {
                                        "MindSphere": {
                                            "$ref": "#/components/examples/DataDestinationMdspExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InUse": {
                                            "$ref": "#/components/examples/DataDestinationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 68,
                                                "errorKey": "DataDestinationDeleteFailed_IsUsed",
                                                "message": "Data destinations which are in use cannot be deleted.",
                                                "debugInfo": {
                                                    "method": "DELETE",
                                                    "route": "/DataService/DataDestination/{id}"
                                                }
                                            }
                                        }
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
                        "DataRetention"
                    ],
                    "summary": "Get the data retention setting.",
                    "description": "Get the data retention setting of the specified asset, aspect or variable. If there is no data retention configured at the object, the data retention settings inherited from an parent object will be returned if there is some.",
                    "parameters": [
                        {
                            "name": "sourceId",
                            "in": "query",
                            "example": "466e7de8e5734528a8991d044649f100",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "sourceTypeId",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/SourceType"
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
                                        "$ref": "#/components/schemas/DataRetention"
                                    },
                                    "examples": {
                                        "Configured": {
                                            "$ref": "#/components/examples/DataRetentionExample"
                                        },
                                        "Cleared": {
                                            "$ref": "#/components/examples/DataRetentionEmptyExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        },
                                        "MissingQueryParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Aspect with the id 0a190ba28c7c4bcb9d9cc9a014f977ad was not found.",
                                                "errorParams": {
                                                    "id": "0a190ba28c7c4bcb9d9cc9a014f977ad",
                                                    "what": "Aspect"
                                                },
                                                "debugInfo": {
                                                    "method": "GET",
                                                    "route": "/DataService/DataRetentions"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "DataRetention"
                    ],
                    "summary": "Update the data retention setting.",
                    "description": "Update the data retention setting of the specified asset, aspect or variable.",
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
                                        "$ref": "#/components/examples/DataRetentionEmptyExample"
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
                                            "$ref": "#/components/examples/DataRetentionEmptyExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Asset with the id 0a190ba28c7c4bcb9d9cc9a014f977ad was not found.",
                                                "errorParams": {
                                                    "id": "0a190ba28c7c4bcb9d9cc9a014f977ad",
                                                    "what": "Asset"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/DataRetentions"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataRetentions/Size": {
                "get": {
                    "summary": "Get used disk space by data retentions.",
                    "description": "Return the size of the data-retention folder.",
                    "tags": [
                        "DataRetention"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataSources": {
                "get": {
                    "tags": [
                        "DataSource"
                    ],
                    "summary": "Get datasources.",
                    "description": "Get all existing datasources from an asset.",
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "query",
                            "description": "the asset to search for datasources.",
                            "example": "466e7de8e5734528a8991d044649f100",
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
                                        "$ref": "#/components/schemas/DataSource"
                                    },
                                    "examples": {
                                        "Success": {
                                            "value": [
                                                {
                                                    "type": "Variable",
                                                    "id": "3bb94ea2325242a7a4270dabe02a23db",
                                                    "aggregation": "None",
                                                    "name": "DatabaseSize",
                                                    "assetId": "8b7e7009e4fa49158d7f287b64be504c",
                                                    "aspectName": "TestAspect",
                                                    "unit": "",
                                                    "dataType": "Double",
                                                    "path": [
                                                        "edge",
                                                        "TopAsset"
                                                    ],
                                                    "acquisitionCategory": "ProcessValue",
                                                    "defaultAggregation": "None"
                                                }
                                            ]
                                        },
                                        "NoDataSourcesOrAssetNotFound": {
                                            "value": []
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "DataSource"
                    ],
                    "summary": "Resolve datasources.",
                    "description": "Resolve the specified datasource references.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/DataSourceReference"
                                    }
                                },
                                "example": [
                                    {
                                        "type": "Variable",
                                        "id": "3bb94ea2325242a7a4270dabe02a23db",
                                        "aggregation": "None"
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/DataSource"
                                    },
                                    "examples": {
                                        "Found": {
                                            "value": [
                                                {
                                                    "type": "Variable",
                                                    "id": "3bb94ea2325242a7a4270dabe02a23db",
                                                    "aggregation": "None",
                                                    "name": "DatabaseSize",
                                                    "assetId": "8b7e7009e4fa49158d7f287b64be504c",
                                                    "aspectName": "TestAspect",
                                                    "unit": "",
                                                    "dataType": "Double",
                                                    "path": [
                                                        "edge",
                                                        "TopAsset"
                                                    ],
                                                    "acquisitionCategory": "ProcessValue",
                                                    "defaultAggregation": "None"
                                                }
                                            ]
                                        },
                                        "Not Found": {
                                            "value": [
                                                {
                                                    "type": "Variable",
                                                    "id": "3bb94ea2325242a7a4270dabe02a23db",
                                                    "aggregation": "None",
                                                    "name": "",
                                                    "assetId": "",
                                                    "aspectName": "",
                                                    "unit": "",
                                                    "dataType": "Double",
                                                    "path": [],
                                                    "acquisitionCategory": "ProcessValue",
                                                    "defaultAggregation": "None",
                                                    "error": {
                                                        "service": "DataService",
                                                        "state": 404,
                                                        "stateText": "NotFound",
                                                        "errorCode": 4,
                                                        "errorKey": "NotFound",
                                                        "message": "The Variable with the id 3bb94ea2325242a7a4270dabe02a23db was not found.",
                                                        "errorParams": {
                                                            "id": "3bb94ea2325242a7a4270dabe02a23db",
                                                            "what": "Variable"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/KPIService/DataSources": {
                "get": {
                    "tags": [
                        "DataSource"
                    ],
                    "summary": "Get datasources.",
                    "description": "Get all existing datasources from an asset. Same route than GET /DataService/DataSources.  This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "name": "assetId",
                            "in": "query",
                            "description": "the asset to search for datasources.",
                            "example": "466e7de8e5734528a8991d044649f100",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "see route GET /DataService/DataSources."
                        }
                    }
                },
                "post": {
                    "tags": [
                        "DataSource"
                    ],
                    "summary": "Resolve datasources.",
                    "description": "Resolve the specified datasource references. Same route than POST /DataService/DataSources.  This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "description": "see route POST /DataService/DataSources."
                                },
                                "example": "see route POST /DataService/DataSources."
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "see route GET /DataService/DataSources."
                        }
                    }
                }
            },
            "/DataService/DataSync": {
                "get": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Get all data syncs.",
                    "description": "Get a list of all available data sync for a specific source.",
                    "parameters": [
                        {
                            "name": "sourceId",
                            "example": "d0df2a40afd64671bda7b53ce8f08ef8",
                            "in": "query",
                            "description": "sourceId to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "sourceTypeId",
                            "example": "asset",
                            "in": "query",
                            "description": "sourceTypeId of the sourceId to search for",
                            "schema": {
                                "$ref": "#/components/schemas/SourceType"
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
                                            "dataSyncs": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/DataSync"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "AssetNotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        },
                                        "AspectNotFound": {
                                            "$ref": "#/components/examples/AspectNotFoundExample"
                                        },
                                        "VariableNotFound": {
                                            "$ref": "#/components/examples/VariableNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Create a new data sync.",
                    "description": "Create a new data sync.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/DataSync"
                                },
                                "examples": {
                                    "Set": {
                                        "$ref": "#/components/examples/DataSyncExample"
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
                                        "$ref": "#/components/schemas/DataSync"
                                    },
                                    "examples": {
                                        "MindSphere": {
                                            "$ref": "#/components/examples/DataSyncExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "AlreadyInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 69,
                                                "errorKey": "DataSyncAlreadyInUse",
                                                "message": "There is already a data sync for this source with the destination wccdev.",
                                                "errorParams": {
                                                    "destName": "wccdev"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/DataSync"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataSync/{id}": {
                "get": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Read a data sync.",
                    "description": "Read a specific data sync with the id from path.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "08ff6fd3ba7e4a94887708b22c6fb70b",
                            "in": "path",
                            "description": "data sync id to search for",
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
                                        "$ref": "#/components/schemas/DataSync"
                                    },
                                    "examples": {
                                        "Success": {
                                            "$ref": "#/components/examples/DataSyncStateExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataSyncNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Update a data sync.",
                    "description": "Update a specific data sync. 'sourceId', 'sourceTypeId' and 'dataDestinationid' are readOnly.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "08ff6fd3ba7e4a94887708b22c6fb70b",
                            "in": "path",
                            "description": "data sync id to search for",
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
                                    "$ref": "#/components/schemas/DataSync"
                                },
                                "examples": {
                                    "Update": {
                                        "$ref": "#/components/examples/DataSyncExample"
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
                                        "$ref": "#/components/schemas/DataSync"
                                    },
                                    "examples": {
                                        "Success": {
                                            "$ref": "#/components/examples/DataSyncExample"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "description": "Test",
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NotSupported": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter DataSync is invalid: Only supported to change the start time.",
                                                "errorParams": {
                                                    "reason": "Only supported to change the start time.",
                                                    "what": "DataSync"
                                                },
                                                "debugInfo": {
                                                    "id": "14f539f918c343bd8320d3d0dd14dddb",
                                                    "method": "PUT",
                                                    "route": "/DataService/DataSync/{id}",
                                                    "sourceId": "0",
                                                    "sourceType": "asset"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataSyncNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Delete a data sync.",
                    "description": "Delete a specific data sync.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "08ff6fd3ba7e4a94887708b22c6fb70b",
                            "in": "path",
                            "description": "data sync id to search for",
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
                                        "$ref": "#/components/schemas/DataSync"
                                    },
                                    "examples": {
                                        "Success": {
                                            "$ref": "#/components/examples/DataSyncExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/DataSyncNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/DataSync/errors": {
                "get": {
                    "tags": [
                        "DataSync"
                    ],
                    "summary": "Get the erros of a data sync.",
                    "description": "Get a list of all erros from a data sync, including all child errors",
                    "parameters": [
                        {
                            "name": "sourceId",
                            "example": "d0df2a40afd64671bda7b53ce8f08ef8",
                            "in": "query",
                            "description": "sourceId to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "sourceTypeId",
                            "example": "asset",
                            "in": "query",
                            "description": "sourceTypeId of the sourceId to search for",
                            "schema": {
                                "$ref": "#/components/schemas/SourceType"
                            },
                            "required": true
                        },
                        {
                            "name": "dataDestinationId",
                            "example": "66501abda97a498c9e246b13195e47ea",
                            "in": "query",
                            "description": "dataDestinationId of the data sync to search for",
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
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/DataSyncError"
                                        }
                                    },
                                    "examples": {
                                        "NoErrors": {
                                            "value": []
                                        },
                                        "WrongAspectName": {
                                            "value": [
                                                {
                                                    "error": {
                                                        "service": "DataService",
                                                        "state": 400,
                                                        "stateText": "BadRequest",
                                                        "errorCode": 78,
                                                        "errorKey": "MdspDataSyncApiError",
                                                        "message": "Insights Hub API error for asset type - SubAsset: code=assetmngmnt.aspect.name.pattern,msg=Given name is not a valid aspect name,log=assetmngmnt.aspect.name.pattern;",
                                                        "errorParams": {
                                                            "object": "SubAsset",
                                                            "reason": "code=assetmngmnt.aspect.name.pattern,msg=Given name is not a valid aspect name,log=assetmngmnt.aspect.name.pattern;",
                                                            "type": "asset type"
                                                        }
                                                    },
                                                    "sourceId": "fe6bd521ae984c1faa57eefec2fed8ee",
                                                    "sourceType": "asset",
                                                    "destinationId": "66501abda97a498c9e246b13195e47ea",
                                                    "state": "Error",
                                                    "path": "edge/TopAsset/SubAsset"
                                                },
                                                {
                                                    "error": {
                                                        "service": "DataService",
                                                        "state": 400,
                                                        "stateText": "BadRequest",
                                                        "errorCode": 78,
                                                        "errorKey": "MdspDataSyncApiError",
                                                        "message": "Insights Hub API error for aspect - Aspect 123: code=assetmngmnt.aspect.name.pattern,msg=Given name is not a valid aspect name,log=assetmngmnt.aspect.name.pattern;",
                                                        "errorParams": {
                                                            "object": "Aspect 123",
                                                            "reason": "code=assetmngmnt.aspect.name.pattern,msg=Given name is not a valid aspect name,log=assetmngmnt.aspect.name.pattern;",
                                                            "type": "aspect"
                                                        }
                                                    },
                                                    "sourceId": "cfc32e75291a41f5bb862ff54546d327",
                                                    "sourceType": "aspect",
                                                    "destinationId": "66501abda97a498c9e246b13195e47ea",
                                                    "state": "Error",
                                                    "path": "edge/TopAsset/SubAsset/Aspect 123"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingQueryParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidQueryParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "AssetNotFound": {
                                            "$ref": "#/components/examples/AssetNotFoundExample"
                                        },
                                        "AspectNotFound": {
                                            "$ref": "#/components/examples/AspectNotFoundExample"
                                        },
                                        "VariableNotFound": {
                                            "$ref": "#/components/examples/VariableNotFoundExample"
                                        },
                                        "DataDestinationNotFound": {
                                            "$ref": "#/components/examples/DataDestinationNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Service/Version": {
                "get": {
                    "tags": [
                        "Service"
                    ],
                    "summary": "Get version.",
                    "description": "Get the current version of dataservice.",
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "version": {
                                                "type": "string",
                                                "example": "1.5.0-beta.0.16200536",
                                                "description": "The version created from git tags, release.sh script in pipeline."
                                            },
                                            "productVersion": {
                                                "type": "string",
                                                "example": "1.5.0-beta.0.16200536"
                                            },
                                            "gitVersion": {
                                                "type": "string",
                                                "example": "v0.0.7-48-ga54b7b1",
                                                "description": "optional, send if this differs from version (mainly non release branch builds)"
                                            },
                                            "build": {
                                                "type": "string",
                                                "example": "16200536",
                                                "description": "pipeline id, locally just \"no-pipeline\""
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Service/IsRunning": {
                "get": {
                    "tags": [
                        "Service"
                    ],
                    "summary": "Check if dataservice is running.",
                    "description": "Can be called to check if dataservice is available.",
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "isRunning": {
                                                "type": "boolean",
                                                "example": true,
                                                "readOnly": true,
                                                "description": "returns always true."
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/Service/IsRunning": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Check if dataservice is running.",
                    "description": "Can be called to check if dataservice is available. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "See \"/DataService/Service/IsRunning\""
                        }
                    }
                }
            },
            "/TokenManagerService/token_keys": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get public.",
                    "description": "Get public key to sign a token. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "example": {
                                        "keys": [
                                            {
                                                "kty": "RSA",
                                                "e": "",
                                                "use": "sig",
                                                "kid": "key-id-1",
                                                "alg": "RS256",
                                                "value": "\n-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo\n4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u\n+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh\nkd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ\n0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg\ncKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc\nmwIDAQAB\n-----END PUBLIC KEY-----\n",
                                                "n": ""
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/oauth_token": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get a session token.",
                    "description": "Provide a cookie and get a session token. The session token is a constant.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "header",
                            "name": "application",
                            "required": true,
                            "description": "provide an application name",
                            "example": "edgeappdataservice",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "in": "cookie",
                            "name": "eads-session-id",
                            "required": true,
                            "description": "any kind of session id.",
                            "example": "4fef2cac49a8481886c9a083f236d8f2",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "in": "cookie",
                            "name": "eads-session-info",
                            "required": true,
                            "description": "any kind of session id.",
                            "example": "752a92e2b1880adf2b97dd618ccba8908ec724c6b1367d6f7cbb0f0553f10472",
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
                                        "$ref": "#/components/schemas/TokenInformation"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Unauthorized",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "No application name": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 401,
                                                "stateText": "Unauthorized",
                                                "errorCode": 5,
                                                "errorKey": "Unauthorized",
                                                "message": "Authorization failed.",
                                                "debugInfo": {
                                                    "hint": "Query parameter application not found.",
                                                    "method": "GET",
                                                    "route": "/TokenManagerService/oauth/token"
                                                }
                                            }
                                        },
                                        "No session": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 401,
                                                "stateText": "Unauthorized",
                                                "errorCode": 5,
                                                "errorKey": "Unauthorized",
                                                "message": "Authorization failed.",
                                                "debugInfo": {
                                                    "eads-session-id": "",
                                                    "eads-session-info": "",
                                                    "hint": "Session not found.",
                                                    "method": "GET",
                                                    "route": "/TokenManagerService/oauth/token"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get a token.",
                    "description": "Login and get a token to access other routes.",
                    "deprecated": true,
                    "requestBody": {
                        "required": true,
                        "description": "used to give appname and tenant information, all properties are needed, but only appname is used.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "appName": {
                                            "type": "string",
                                            "example": "machinemonitor"
                                        },
                                        "appVersion": {
                                            "type": "string",
                                            "example": "1.0.0"
                                        },
                                        "hostTenant": {
                                            "type": "string",
                                            "example": "edge"
                                        },
                                        "userTenant": {
                                            "type": "string",
                                            "example": "edge"
                                        }
                                    }
                                },
                                "examples": {
                                    "Machine Monitor": {
                                        "value": {
                                            "appName": "machinemonitor",
                                            "appVersion": "1.0.0",
                                            "hostTenant": "edge",
                                            "userTenant": "edge"
                                        }
                                    },
                                    "DataService": {
                                        "value": {
                                            "appName": "edgeappdataservice",
                                            "appVersion": "1.0.0",
                                            "hostTenant": "edge",
                                            "userTenant": "edge"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "parameters": [
                        {
                            "in": "header",
                            "name": "x-space-auth-key",
                            "required": true,
                            "description": "base64 encoded login string, should start with \"basic \". The encoded part is \"username:password\".",
                            "example": "basic YWRtaW46",
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
                                        "$ref": "#/components/schemas/TokenInformation"
                                    },
                                    "examples": {
                                        "MachineMonitor": {
                                            "value": {
                                                "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtleS1pZC0xIn0.eyJzY29wZSI6WyJtYWNoaW5lbW9uaXRvci5hc3NldGNvbmZpZ3VyYXRpb25zLnJlYWQiLCJtYWNoaW5lbW9uaXRvci5hc3NldGNvbmZpZ3VyYXRpb25zLndyaXRlIiwibWFjaGluZW1vbml0b3IuYXNzZXRzLnJlYWQiLCJtYWNoaW5lbW9uaXRvci5hc3NldHMud3JpdGUiLCJtYWNoaW5lbW9uaXRvci5hc3NpZ25lZHJ1bGVzLnJlYWQiLCJtYWNoaW5lbW9uaXRvci5hc3NpZ25lZHJ1bGVzLndyaXRlIiwibWFjaGluZW1vbml0b3IuZGFzaGJvYXJkc2V0dGluZ3MucmVhZCIsIm1hY2hpbmVtb25pdG9yLmRhc2hib2FyZHNldHRpbmdzLndyaXRlIiwibWFjaGluZW1vbml0b3IuZGF0YS5yZWFkIiwibWFjaGluZW1vbml0b3IuZGVidWdnaW5nIiwibWFjaGluZW1vbml0b3IuZG9jdW1lbnQucmVhZCIsIm1hY2hpbmVtb25pdG9yLmRvY3VtZW50LndyaXRlIiwibWFjaGluZW1vbml0b3IuZmlsZS5yZWFkIiwibWFjaGluZW1vbml0b3IuZmlsZS53cml0ZSIsIm1hY2hpbmVtb25pdG9yLmluc3RydWN0aW9uLnJlYWQiLCJtYWNoaW5lbW9uaXRvci5pbnN0cnVjdGlvbi53cml0ZSIsIm1hY2hpbmVtb25pdG9yLm1haW50ZW5hbmNlam9iLnJlYWQiLCJtYWNoaW5lbW9uaXRvci5tYWludGVuYW5jZWpvYi53cml0ZSIsIm1hY2hpbmVtb25pdG9yLm1haW50ZW5hbmNlam9iLm1hbnVmYWN0dXJlciIsIm1hY2hpbmVtb25pdG9yLm1haW50ZW5hbmNlam9iLm9wZXJhdG9yIiwibWFjaGluZW1vbml0b3IubWFpbnRlbmFuY2Vqb2IudGhpcmRwYXJ0eSIsIm1hY2hpbmVtb25pdG9yLm1haW50ZW5hbmNlcnVsZS5yZWFkIiwibWFjaGluZW1vbml0b3IubWFpbnRlbmFuY2VydWxlLndyaXRlIiwibWFjaGluZW1vbml0b3IucnVsZWNvbGxlY3Rpb24ucmVhZCIsIm1hY2hpbmVtb25pdG9yLnJ1bGVjb2xsZWN0aW9uLndyaXRlIiwibWFjaGluZW1vbml0b3Iuc2VydmljaW5nIiwibWFjaGluZW1vbml0b3IudXNlci5yZWFkIiwibWFjaGluZW1vbml0b3IudXNlci53cml0ZSJdLCJjbGllbnRfaWQiOiJtYWNoaW5lbW9uaXRvci1lZGdlIiwiY2lkIjoibWFjaGluZW1vbml0b3ItZWRnZSIsImF6cCI6Im1hY2hpbmVtb25pdG9yLWVkZ2UiLCJncmFudF90eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwidXNlcl9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwib3JpZ2luIjoiZWRnZSIsInVzZXJfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJBZG1pbi5FZGdlQFNpZW1lbnMuY29tIiwiemlkIjoiZWRnZSIsInRlbiI6ImVkZ2UiLCJzY2hlbWFzIjpbInVybjpzaWVtZW5zOm1pbmRzcGhlcmU6aWFtOnYxIl0sImNhdCI6InVzZXItdG9rZW46djEiLCJhdWQiOltdLCJpc3MiOiJodHRwOi8vZWRnZWFwcGRhdGFzZXJ2aWNlOjQyMDMvVG9rZW5NYW5hZ2VyU2VydmljZS9vYXV0aC90b2tlbiIsInN1YiI6ImVkZ2UiLCJqdGkiOiJiNTlkZjBjNmNkNjA0NzMyOGRiMTRhNGI1MTM1MjQ2ZCJ9.ZbWH871JBh9j7gOhl6RBYE6Gch8iBlKGJcm5JTjhjDil2o4El2iSkbrHWapsXzbfbqGMqzLOXV_awhWdtUGoXLSK-1u8oeoPR3O1qT8VP8vDNqtae86B4MmHHfNPHX2D7sQ2JdbrvSKFyUiICg0_37QSisOmoap6a6qUcyWB-Zoo-tO1dM25M_OYT6L2RxtfVaLoXjUpZVL5LDKI3L_jVmlminlzPwqCfaGrr8VyWdFAUa0Vw5MVG5DoGSfwOb6QhIKCnPRYerjq8sm9edx-5PK4GmsQmUH3zzRDSFFrGg4NYib3k9vcJHSv-hJVNNaCUzkL1S5M67fPJr375a-aQA",
                                                "token_type": "bearer",
                                                "expires_in": 1209600,
                                                "scope": "edge",
                                                "jti": "b59df0c6cd6047328db14a4b5135246d"
                                            },
                                            "description": "This is for appname \"machinemonitor\" and user \"admin\" only."
                                        },
                                        "DataService": {
                                            "value": {
                                                "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtleS1pZC0xIn0.eyJzY29wZSI6WyJtZHNwOmNvcmU6YWRtaW4zcmRwYXJ0eXRlY2h1c2VyIl0sImNsaWVudF9pZCI6ImVkZ2VhcHBkYXRhc2VydmljZS1lZGdlIiwiY2lkIjoiZWRnZWFwcGRhdGFzZXJ2aWNlLWVkZ2UiLCJhenAiOiJlZGdlYXBwZGF0YXNlcnZpY2UtZWRnZSIsImdyYW50X3R5cGUiOiJhdXRob3JpemF0aW9uX2NvZGUiLCJ1c2VyX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJvcmlnaW4iOiJlZGdlIiwidXNlcl9uYW1lIjoiVGVjaFVzZXIiLCJlbWFpbCI6IlRlY2hVc2VyLkVkZ2VAU2llbWVucy5jb20iLCJ6aWQiOiJlZGdlIiwidGVuIjoiZWRnZSIsInNjaGVtYXMiOlsidXJuOnNpZW1lbnM6bWluZHNwaGVyZTppYW06djEiXSwiY2F0IjoidXNlci10b2tlbjp2MSIsImF1ZCI6W10sImlzcyI6Imh0dHA6Ly9lZGdlYXBwZGF0YXNlcnZpY2U6NDIwMy9Ub2tlbk1hbmFnZXJTZXJ2aWNlL29hdXRoL3Rva2VuIiwic3ViIjoiZWRnZSIsImp0aSI6ImI1OWRmMGM2Y2Q2MDQ3MzI4ZGIxNGE0YjUxMzUyNDZkIn0.ZmcVb6KcvYPk0w1-UGJPzjF-IPxMVbKOX5kCo47b9ItDVexicUMVuXvoCwN7djFJ6AgSm_tuwpc-gyW-5iPc0DPm-K4Y21hUdpiF6gm3XpaJ6WE05EpAvko5HXShuSnyAITwztplHPWO46kORR2nwRsGShur-Tk12WxhvNXymT65ieG_U6DeaF42DMk730XXBC74de2mL_EuhgRVZT_vyUhYFOsjCtXNIbOfDuCKRtf0QAHIym5UeXl7wP6wobbgVOCW7I-lsqs_HoMnj8tT3x7iYJp5pexV6lK6jZZajs-p2H9pJuz5Sq1V7X5qcwe5D9iOM9vJ8luGHTQR6Dzqow",
                                                "token_type": "bearer",
                                                "expires_in": 1209600,
                                                "scope": "edge",
                                                "jti": "b59df0c6cd6047328db14a4b5135246d"
                                            },
                                            "description": "This is for all other combinations of appname and user."
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        }
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Unauthorized",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "Invalid Prefix": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 401,
                                                "stateText": "Unauthorized",
                                                "errorCode": 5,
                                                "errorKey": "Unauthorized",
                                                "message": "Authorization failed.",
                                                "debugInfo": {
                                                    "hint": "Header x-space-auth-key: invalid prefix.",
                                                    "method": "POST",
                                                    "route": "/TokenManagerService/oauth/token",
                                                    "x-space-auth-key": ""
                                                }
                                            }
                                        },
                                        "Invalid Payload": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 401,
                                                "stateText": "Unauthorized",
                                                "errorCode": 5,
                                                "errorKey": "Unauthorized",
                                                "message": "Authorization failed.",
                                                "debugInfo": {
                                                    "hint": "Header x-space-auth-key: invalid payload.",
                                                    "method": "POST",
                                                    "route": "/TokenManagerService/oauth/token",
                                                    "x-space-auth-key": "basic 123"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/users": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get users.",
                    "description": "Get list of predefined users. The list cannot be extented. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/TokenUser"
                                        }
                                    },
                                    "example": [
                                        {
                                            "id": "00000000000000000000000000000001",
                                            "userName": "Admin",
                                            "familyName": "Edge",
                                            "givenName": "Admin",
                                            "email": "Admin.Edge@Siemens.com",
                                            "roles": [
                                                {
                                                    "application": "edgeappdataservice",
                                                    "role": "admin"
                                                }
                                            ]
                                        },
                                        {
                                            "id": "00000000000000000000000000000002",
                                            "userName": "User",
                                            "familyName": "Edge",
                                            "givenName": "User",
                                            "email": "User.Edge@Siemens.com",
                                            "roles": [
                                                {
                                                    "application": "edgeappdataservice",
                                                    "role": "user"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                "post": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Create a user.",
                    "description": "Create a new user. The user information will be returned but not saved. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/TokenUser"
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
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/users/{id}": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get a user.",
                    "description": "Get a user. The returned user is only a predefined user. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "description": "any text string is accepted.",
                            "example": "00000000000000000000000000000001",
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
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Update a user.",
                    "description": "Update a user. No real update is done, it will only return the provided user information. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "description": "any text string is accepted.",
                            "example": "00000000000000000000000000000001",
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
                                        "$ref": "#/components/schemas/TokenUser"
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
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Delete a user.",
                    "description": "Delete a user. No real user is deleted, it will only return default user information. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "description": "any text string is accepted.",
                            "example": "00000000000000000000000000000001",
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
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/users/create": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Create a user.",
                    "description": "Create a user, as dataservice c++ does not support body content in get request, only a default user will be returned. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/users/me": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get own user.",
                    "description": "Get own user. The returned user is only a predefined user. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Update own user.",
                    "description": "Update the own user. No real update is done, it will only return the provided user information. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/TokenUser"
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
                                        "$ref": "#/components/schemas/TokenUser"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/identitymanagement/v3/users": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get identity users.",
                    "description": "Get list of predefined identity users. The list cannot be extented. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "query",
                            "required": false,
                            "name": "filter",
                            "description": "filter usernames (e-mail), must be in the format: 'userName Eq \"Admin.Edge@Siemens.com\"'.",
                            "example": "userName Eq \"Admin.Edge@Siemens.com\"",
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
                                        "type": "object",
                                        "properties": {
                                            "resources": {
                                                "type": "array",
                                                "items": {
                                                    "$ref": "#/components/schemas/TokenIdentityUser"
                                                }
                                            },
                                            "itemPerPage": {
                                                "type": "integer",
                                                "example": 100
                                            },
                                            "schemas": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "urn:scim:schemas:core:1.0"
                                                }
                                            },
                                            "startIndex": {
                                                "type": "integer",
                                                "example": 1
                                            },
                                            "totalResults": {
                                                "type": "integer",
                                                "example": 2
                                            }
                                        }
                                    },
                                    "example": {
                                        "resources": [
                                            {
                                                "schemas": [
                                                    "urn:scim:schemas:core:1.0"
                                                ],
                                                "id": "00000000000000000000000000000001",
                                                "userName": "Admin.Edge@Siemens.com",
                                                "name": {
                                                    "familyName": "Edge",
                                                    "givenName": "Admin"
                                                },
                                                "groups": [
                                                    {
                                                        "value": "",
                                                        "display": "mdsp:edge:machinemonitor.admin",
                                                        "type": "DIRECT"
                                                    }
                                                ],
                                                "emails": [
                                                    {
                                                        "value": "Admin.Edge@Siemens.com"
                                                    }
                                                ],
                                                "active": true
                                            },
                                            {
                                                "schemas": [
                                                    "urn:scim:schemas:core:1.0"
                                                ],
                                                "id": "00000000000000000000000000000002",
                                                "userName": "User.Edge@Siemens.com",
                                                "name": {
                                                    "familyName": "Edge",
                                                    "givenName": "User"
                                                },
                                                "groups": [
                                                    {
                                                        "value": "",
                                                        "display": "mdsp:edge:machinemonitor.user",
                                                        "type": "DIRECT"
                                                    }
                                                ],
                                                "emails": [
                                                    {
                                                        "value": "User.Edge@Siemens.com"
                                                    }
                                                ],
                                                "active": true
                                            }
                                        ],
                                        "itemPerPage": 100,
                                        "schemas": [
                                            "urn:scim:schemas:core:1.0"
                                        ],
                                        "startIndex": 1,
                                        "totalResults": 2
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/identitymanagement/v3/users/{id}": {
                "get": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get an identity users.",
                    "description": "Get a predefined identity users. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "parameters": [
                        {
                            "in": "path",
                            "required": true,
                            "name": "id",
                            "description": "id to search for, there are only two possible users: admin and user",
                            "example": "00000000000000000000000000000001",
                            "schema": {
                                "type": "string",
                                "enum": [
                                    "00000000000000000000000000000001",
                                    "00000000000000000000000000000002"
                                ]
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/TokenIdentityUser"
                                    },
                                    "examples": {
                                        "Admin": {
                                            "value": {
                                                "schemas": [
                                                    "urn:scim:schemas:core:1.0"
                                                ],
                                                "id": "00000000000000000000000000000001",
                                                "userName": "Admin.Edge@Siemens.com",
                                                "name": {
                                                    "familyName": "Edge",
                                                    "givenName": "Admin"
                                                },
                                                "groups": [
                                                    {
                                                        "value": "",
                                                        "display": "mdsp:edge:machinemonitor.admin",
                                                        "type": "DIRECT"
                                                    }
                                                ],
                                                "emails": [
                                                    {
                                                        "value": "Admin.Edge@Siemens.com"
                                                    }
                                                ],
                                                "active": true
                                            }
                                        },
                                        "User": {
                                            "value": {
                                                "schemas": [
                                                    "urn:scim:schemas:core:1.0"
                                                ],
                                                "id": "00000000000000000000000000000002",
                                                "userName": "User.Edge@Siemens.com",
                                                "name": {
                                                    "familyName": "Edge",
                                                    "givenName": "User"
                                                },
                                                "groups": [
                                                    {
                                                        "value": "",
                                                        "display": "mdsp:edge:machinemonitor.user",
                                                        "type": "DIRECT"
                                                    }
                                                ],
                                                "emails": [
                                                    {
                                                        "value": "User.Edge@Siemens.com"
                                                    }
                                                ],
                                                "active": true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "example": {
                                        "service": "DataService",
                                        "state": 404,
                                        "stateText": "NotFound",
                                        "errorCode": 4,
                                        "errorKey": "NotFound",
                                        "message": "The user with the id 000000000000000000000000000000021 was not found.",
                                        "errorParams": {
                                            "id": "000000000000000000000000000000021",
                                            "what": "user"
                                        },
                                        "debugInfo": {
                                            "method": "GET",
                                            "route": "/TokenManagerService/identitymanagement/v3/users/{id}"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/usagetransparency/v3/usages": {
                "post": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get usage.",
                    "description": "Return a default string. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "example": "\"Data is successfully saved to the database\""
                                }
                            }
                        }
                    }
                }
            },
            "/TokenManagerService/usagetransparency/v3/usagesJobs": {
                "post": {
                    "tags": [
                        "TokenManager"
                    ],
                    "summary": "Get usage.",
                    "description": "Return a default string. This route is deprecated and will be supported until 2023-09-07.",
                    "deprecated": true,
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "example": "\"Data is successfully saved to the database\""
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/VariableConfigurations/{id}": {
                "get": {
                    "tags": [
                        "VariableConfigurations"
                    ],
                    "summary": "Get a variable configuration.",
                    "description": "Get a variable configuration. If not found a default configuration will be send.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3a801b60917e4ca291ff027ba263697e",
                            "in": "path",
                            "description": "variable configuration id to search for",
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
                                        "$ref": "#/components/schemas/VariableConfiguration"
                                    },
                                    "examples": {
                                        "Default": {
                                            "value": {
                                                "variableId": "3a801b60917e4ca291ff027ba263697e",
                                                "unit": "",
                                                "isAggregated": false,
                                                "acquisitionCategory": "ProcessValue",
                                                "acquisitionCycle": {
                                                    "base": "acyclic",
                                                    "factor": 0
                                                },
                                                "counterConfigurations": []
                                            }
                                        },
                                        "Set": {
                                            "value": {
                                                "variableId": "3a801b60917e4ca291ff027ba263697e",
                                                "unit": "%",
                                                "isAggregated": true,
                                                "acquisitionCategory": "Counter",
                                                "acquisitionCycle": {
                                                    "factor": 1,
                                                    "base": "Minute"
                                                },
                                                "counterConfigurations": [
                                                    {
                                                        "validFrom": "2021-12-01T00:00:00Z",
                                                        "counterConstant": 1,
                                                        "counterType": "ReverseCounter",
                                                        "triggeredReset": false,
                                                        "rangeStart": null,
                                                        "rangeEnd": null
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "VariableConfigurations"
                    ],
                    "summary": "Update a variable configuration.",
                    "description": "Update a specific variable configuration. If the configuration for this id does it exist, it will be created.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3a801b60917e4ca291ff027ba263697e",
                            "in": "path",
                            "description": "variable configuration to search for",
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
                                    "$ref": "#/components/schemas/VariableConfiguration"
                                },
                                "example": {
                                    "unit": "",
                                    "isAggregated": false,
                                    "acquisitionCategory": "None",
                                    "acquisitionCycle": {
                                        "base": "hour",
                                        "factor": 3
                                    },
                                    "counterConfigurations": []
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
                                        "$ref": "#/components/schemas/VariableConfiguration"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "VariableConfigurations"
                    ],
                    "summary": "Delete a variable configuration.",
                    "description": "Delete a variable configuration. If the configuration does not exist, only a default config will be returned.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "3a801b60917e4ca291ff027ba263697e",
                            "in": "path",
                            "description": "variable configuration to search for",
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
                                        "$ref": "#/components/schemas/VariableConfiguration"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/VariableConfigurations/Size": {
                "get": {
                    "summary": "Get used disk space by variable configurations.",
                    "description": "Return the size of the variableConfigurations folder.",
                    "tags": [
                        "VariableConfigurations"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
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
                    "description": "Get a list of Variables. Variables can be filtered by assetsIds, aspectIds, adapterIds or variableIds. If no filter is specified, all variables will be returned. It is not supported to specify more than one filter parameter.",
                    "parameters": [
                        {
                            "name": "assetIds",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "example": [
                                "d0df2a40afd64671bda7b53ce8f08ef8"
                            ],
                            "description": "Filter the variable list by assetIds."
                        },
                        {
                            "name": "aspectIds",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "required": false,
                            "example": [
                                "53abb2fdc0da4c24b84b735930c7b9c8"
                            ],
                            "description": "Filter the variable list by aspectIds."
                        },
                        {
                            "name": "adapterIds",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "required": false,
                            "example": [
                                "profinet"
                            ],
                            "description": "Filter the variable list by adapterIds."
                        },
                        {
                            "name": "variable",
                            "in": "query",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "required": false,
                            "example": [
                                "624c0f7b550c4c468c848842489582f3"
                            ],
                            "description": "Filter the variable list by variableIds."
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
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "TooManyFilter": {
                                            "$ref": "#/components/examples/TooManyFilterExample"
                                        }
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
                    "summary": "Create an variable.",
                    "description": "Create a new variable. Name must be unique in the provided aspect or asset and not empty. It is not allowed to create a variable from an aspect with aspect type.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Variable"
                                },
                                "examples": {
                                    "With Adapter": {
                                        "value": {
                                            "variableName": "Variable1",
                                            "dataType": "Double",
                                            "assetId": "0",
                                            "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                            "adapterId": "profinet",
                                            "topic": "PLC1::Double1::4::7"
                                        }
                                    },
                                    "Without Adapter": {
                                        "value": {
                                            "variableName": "Variable1",
                                            "dataType": "Double",
                                            "assetId": "0",
                                            "aspectId": ""
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
                                        "$ref": "#/components/schemas/Variable"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 37,
                                                "errorKey": "VariableNameAlreadyInUse",
                                                "message": "The asset 'edge' has already a variable with the name 'Variable1'.",
                                                "errorParams": {
                                                    "asset": "edge",
                                                    "nameInUse": "Variable1"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        },
                                        "NoAspectTypeMember": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 53,
                                                "errorKey": "VariableInstance_NoCreate",
                                                "message": "It is not allowed to create AspectType instance members.",
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        },
                                        "InconsistentParents": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter aspectId is invalid: The specified aspect is not a child of the specified asset.",
                                                "errorParams": {
                                                    "reason": "The specified aspect is not a child of the specified asset.",
                                                    "what": "aspectId"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "AssetNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Asset with the id 01 was not found.",
                                                "errorParams": {
                                                    "id": "01",
                                                    "what": "Asset"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        },
                                        "AspectNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Aspect with the id 1 was not found.",
                                                "errorParams": {
                                                    "id": "1",
                                                    "what": "Aspect"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        },
                                        "AdapterNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Adapter with the id 123 was not found.",
                                                "errorParams": {
                                                    "id": "123",
                                                    "what": "Adapter"
                                                },
                                                "debugInfo": {
                                                    "method": "POST",
                                                    "route": "/DataService/Variables"
                                                }
                                            }
                                        }
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
                    "summary": "Read a variable.",
                    "description": "Read a specific variable with the id from path.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "53abb2fdc0da4c24b84b735930c7b9c8",
                            "in": "path",
                            "description": "variable id to search for",
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
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/VariableNotFoundExample"
                                        }
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
                    "summary": "Update a variable.",
                    "description": "Update a specific variable. Name must be unique in the provided aspect or asset.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "53abb2fdc0da4c24b84b735930c7b9c8",
                            "in": "path",
                            "description": "variable id to search for",
                            "schema": {
                                "type": "string"
                            },
                            "required": true
                        },
                        {
                            "name": "forceDataTypeChange",
                            "required": false,
                            "in": "query",
                            "example": true,
                            "schema": {
                                "type": "boolean"
                            },
                            "description": "if datatype is changed and the types cannot be converted without error, this forces to convert it anyway."
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
                                    "variableName": "Variable1",
                                    "dataType": "Double",
                                    "assetId": "0",
                                    "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                    "adapterId": "profinet",
                                    "topic": "PLC1::Double1::4::7"
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
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "MissingParameter": {
                                            "$ref": "#/components/examples/ExceptionMissingParameterExample"
                                        },
                                        "InvalidParameter": {
                                            "$ref": "#/components/examples/ExceptionInvalidParameterExample"
                                        },
                                        "NameInUse": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 37,
                                                "errorKey": "VariableNameAlreadyInUse",
                                                "message": "The asset 'edge' has already a variable with the name 'Variable1'.",
                                                "errorParams": {
                                                    "asset": "edge",
                                                    "nameInUse": "Variable1"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        },
                                        "NoAspectTypeMember": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 53,
                                                "errorKey": "VariableInstance_NoCreate",
                                                "message": "It is not allowed to create AspectType instance members.",
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        },
                                        "InconsistentParents": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 3,
                                                "errorKey": "InvalidParameter",
                                                "message": "Parameter aspectId is invalid: The specified aspect is not a child of the specified asset.",
                                                "errorParams": {
                                                    "reason": "The specified aspect is not a child of the specified asset.",
                                                    "what": "aspectId"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/VariableNotFoundExample"
                                        },
                                        "AssetNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Asset with the id 01 was not found.",
                                                "errorParams": {
                                                    "id": "01",
                                                    "what": "Asset"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        },
                                        "AspectNotFound": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 404,
                                                "stateText": "NotFound",
                                                "errorCode": 4,
                                                "errorKey": "NotFound",
                                                "message": "The Aspect with the id 1 was not found.",
                                                "errorParams": {
                                                    "id": "1",
                                                    "what": "Aspect"
                                                },
                                                "debugInfo": {
                                                    "method": "PUT",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        }
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
                    "description": "Delete a specific variable. Only variables who are not part of an aspect type can be deleted.",
                    "parameters": [
                        {
                            "name": "id",
                            "example": "53abb2fdc0da4c24b84b735930c7b9c8",
                            "in": "path",
                            "description": "variable id to search for",
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
                        },
                        "400": {
                            "description": "Bad Request",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NoAspectTypeMember": {
                                            "value": {
                                                "service": "DataService",
                                                "state": 400,
                                                "stateText": "BadRequest",
                                                "errorCode": 56,
                                                "errorKey": "VariableInstance_NoDelete",
                                                "message": "It is not allowed to delete AspectType instance members.",
                                                "debugInfo": {
                                                    "method": "DELETE",
                                                    "route": "/DataService/Variables/{id}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Exception"
                                    },
                                    "examples": {
                                        "NotFound": {
                                            "$ref": "#/components/examples/VariableNotFoundExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables/Size": {
                "get": {
                    "summary": "Get used disk space by variable variables.",
                    "description": "Return the size of the variables folder.",
                    "tags": [
                        "Variables"
                    ],
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Size"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables/Bulk/Create": {
                "post": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Create a set of variables.",
                    "description": "Create a set of new variables.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Variable"
                                    }
                                },
                                "example": [
                                    {
                                        "variableName": "Variable1",
                                        "dataType": "Double",
                                        "assetId": "0",
                                        "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                        "adapterId": "profinet",
                                        "topic": "PLC1::Double1::4::7"
                                    },
                                    {
                                        "variableName": "Variable2",
                                        "dataType": "Double",
                                        "assetId": "0",
                                        "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                        "adapterId": "profinet",
                                        "topic": "PLC1::Double1::4::7"
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/VariableBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/VariableBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables/Bulk/Update": {
                "post": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Update a set of variables.",
                    "description": "Update a set of variables.",
                    "parameters": [
                        {
                            "name": "forceDataTypeChange",
                            "required": false,
                            "in": "query",
                            "example": true,
                            "schema": {
                                "type": "boolean"
                            },
                            "description": "If datatype is changed and the types cannot be converted without error, this forces to convert it anyway."
                        }
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Variable"
                                    }
                                },
                                "example": [
                                    {
                                        "variableId": "53abb2fdc0da4c24b84b735930c7b9c8",
                                        "variableName": "Variable1",
                                        "dataType": "Double",
                                        "blobType": "image/png",
                                        "assetId": "0",
                                        "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                        "unit": "",
                                        "adapterId": "profinet",
                                        "topic": "PLC1::Double1::4::7",
                                        "aspectName": "Aspect",
                                        "connected": false,
                                        "store": true
                                    },
                                    {
                                        "variableId": "099fdb1ca4fd4829a7afdeff7091ee02",
                                        "variableName": "Variable2",
                                        "dataType": "Double",
                                        "blobType": "image/png",
                                        "assetId": "0",
                                        "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                        "unit": "",
                                        "adapterId": "profinet",
                                        "topic": "PLC1::Double1::4::8",
                                        "aspectName": "Aspect",
                                        "connected": false,
                                        "store": true
                                    }
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AspectBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/AspectBulkResponseExample"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/DataService/Variables/Bulk/Delete": {
                "post": {
                    "tags": [
                        "Variables"
                    ],
                    "summary": "Delete a set of variables.",
                    "description": "Delete a set of variables.",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "example": [
                                    "53abb2fdc0da4c24b84b735930c7b9c8",
                                    "099fdb1ca4fd4829a7afdeff7091ee02"
                                ]
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Success",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/VariableBulkResponse"
                                    },
                                    "examples": {
                                        "Aspect": {
                                            "$ref": "#/components/examples/VariableBulkResponseExample"
                                        }
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
                "Adapter": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "readOnly": true,
                            "example": "profinet"
                        },
                        "name": {
                            "type": "string",
                            "example": "Profinet IO Connector"
                        },
                        "type": {
                            "type": "string",
                            "readOnly": true,
                            "example": "simaticadapter",
                            "enum": [
                                "simaticadapter",
                                "hmiruntime",
                                "connectivitysuite",
                                "systeminfo"
                            ]
                        },
                        "locked": {
                            "type": "boolean",
                            "readOnly": true,
                            "description": "true, if this adapter is a default system adapter, which cannot be changed.",
                            "example": true
                        },
                        "active": {
                            "type": "boolean",
                            "description": "true, if this adapter is enabled.",
                            "example": true
                        },
                        "isDefault": {
                            "type": "boolean",
                            "example": false
                        },
                        "canBrowse": {
                            "type": "boolean",
                            "description": "true, if this type of adapter supports browsing.",
                            "example": true
                        },
                        "connected": {
                            "type": "boolean",
                            "readOnly": true,
                            "example": false
                        },
                        "config": {
                            "type": "object",
                            "description": "Adapter type specific configuration.",
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/AdapterMqttConfig"
                                },
                                {
                                    "$ref": "#/components/schemas/AdapterOpenPipeConfig"
                                },
                                {
                                    "$ref": "#/components/schemas/AdapterGrpcConfig"
                                },
                                {
                                    "$ref": "#/components/schemas/AdapterSystemInfoConfig"
                                }
                            ]
                        },
                        "error": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/Exception"
                                },
                                {
                                    "readOnly": true,
                                    "nullable": true,
                                    "description": "Error informations it there are problems with the adapter."
                                }
                            ]
                        },
                        "connectorInfo": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ConnectorState"
                                },
                                {
                                    "readOnly": true,
                                    "nullable": true,
                                    "description": "Detailed info about the internal state of the connector. Not all connectors provide this information."
                                }
                            ]
                        }
                    }
                },
                "AdapterMqttConfig": {
                    "type": "object",
                    "properties": {
                        "brokerURL": {
                            "type": "string",
                            "example": "tcp://ie-databus:1883"
                        },
                        "username": {
                            "type": "string",
                            "example": ""
                        },
                        "password": {
                            "type": "string",
                            "example": "",
                            "description": "The password will only transfered from the frontend to the backend in the POST and PUT methods."
                        },
                        "browseURL": {
                            "type": "string",
                            "example": "ie/m/j/simatic/v1/pnhs1/dp/r"
                        }
                    }
                },
                "AdapterOpenPipeConfig": {
                    "type": "object",
                    "properties": {
                        "openPipePath": {
                            "type": "string",
                            "example": "/tmp/siemens/automation/HmiRuntime"
                        }
                    }
                },
                "AdapterGrpcConfig": {
                    "type": "object",
                    "properties": {
                        "appInstanceId": {
                            "type": "string",
                            "example": "css7pdriver1"
                        }
                    }
                },
                "AdapterSystemInfoConfig": {
                    "type": "object"
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
                        "Gantt",
                        "MinMaxTrend",
                        "Duration",
                        "Occurrence",
                        "MinWithTimestamp",
                        "MaxWithTimestamp",
                        "FirstWithTimestamp",
                        "LastWithTimestamp",
                        "Latest",
                        "StepDuration",
                        "ValueChanges",
                        "GanttView"
                    ]
                },
                "AggregationObject": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "description": "aggregation id and also the id of the generated variable",
                            "example": "8b7e7009e4fa49158d7f287b64be504c"
                        },
                        "sourceId": {
                            "type": "string",
                            "description": "the variable id of the source variable",
                            "example": "39e32d19d95846f8b6a1b520893707fc"
                        },
                        "sourceDataType": {
                            "type": "string",
                            "readOnly": true,
                            "description": "depends on the source variable",
                            "example": "Double"
                        },
                        "aggregation": {
                            "$ref": "#/components/schemas/Aggregation",
                            "example": "Sum"
                        },
                        "cycle": {
                            "$ref": "#/components/schemas/TimeRange"
                        },
                        "provideAsVariable": {
                            "type": "boolean",
                            "example": false,
                            "deprecated": true,
                            "description": "optional, is deprecated and will be supported until 2024-06-01."
                        },
                        "publishMqtt": {
                            "type": "boolean",
                            "example": false,
                            "deprecated": true,
                            "description": "optional, is deprecated and will be supported until 2024-06-01."
                        },
                        "aggregationOptions": {
                            "$ref": "#/components/schemas/AggregationOptions"
                        }
                    }
                },
                "AggregationOptions": {
                    "type": "object",
                    "properties": {
                        "statusValues": {
                            "type": "array",
                            "items": {
                                "type": "number"
                            },
                            "example": [
                                10,
                                20,
                                30
                            ]
                        }
                    }
                },
                "Aspect": {
                    "type": "object",
                    "properties": {
                        "aspectId": {
                            "type": "string",
                            "readOnly": true,
                            "example": "53abb2fdc0da4c24b84b735930c7b9c8"
                        },
                        "aspectName": {
                            "type": "string",
                            "example": "AspectName"
                        },
                        "assetId": {
                            "type": "string",
                            "example": "0"
                        },
                        "aspectTypeId": {
                            "type": "string",
                            "default": null,
                            "example": null
                        }
                    }
                },
                "AspectType": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "StepChainAnalysis_Step"
                        },
                        "name": {
                            "type": "string",
                            "example": "StepChainAnalysis_Step"
                        },
                        "isSystemTyp": {
                            "type": "boolean",
                            "readOnly": true,
                            "example": true
                        },
                        "variables": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/AspectTypeVariable"
                            },
                            "maxLength": 4,
                            "minLength": 3
                        }
                    }
                },
                "AspectTypeVariable": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "StepChainAnalysis_Step_ActiveState"
                        },
                        "name": {
                            "type": "string",
                            "example": "StepChainAnalysis_Step_ActiveState"
                        },
                        "dataType": {
                            "type": "string",
                            "example": "Bool"
                        },
                        "unit": {
                            "type": "string",
                            "example": ""
                        },
                        "aspectTypeId": {
                            "type": "string",
                            "example": "StepChainAnalysis_Step"
                        }
                    }
                },
                "AspectBulkResponse": {
                    "type": "object",
                    "properties": {
                        "results": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Aspect"
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Exception"
                            }
                        }
                    }
                },
                "Asset": {
                    "type": "object",
                    "properties": {
                        "assetId": {
                            "type": "string",
                            "readOnly": true,
                            "example": "d0df2a40afd64671bda7b53ce8f08ef8"
                        },
                        "name": {
                            "type": "string",
                            "example": "TopAsset"
                        },
                        "parentId": {
                            "type": "string",
                            "example": "0"
                        },
                        "sortOrder": {
                            "type": "integer",
                            "example": 0
                        },
                        "hasChildren": {
                            "type": "boolean",
                            "description": "true if this asset has children.",
                            "readOnly": true,
                            "example": false
                        },
                        "children": {
                            "type": "array",
                            "description": "Optional, Only exists if the query parameter includeChildren was specified.",
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
                        }
                    }
                },
                "AssetBulkResponse": {
                    "type": "object",
                    "properties": {
                        "results": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Asset"
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Exception"
                            }
                        }
                    }
                },
                "AcquisitionCategory": {
                    "type": "string",
                    "enum": [
                        "None",
                        "ProcessValue",
                        "Power",
                        "Energy",
                        "Flow",
                        "Amount",
                        "Counter",
                        "State"
                    ]
                },
                "CalculateJobMode": {
                    "description": "Enumeration to specify the mode of a calculate job. <ul>Single - A single value over the whole timerange should be calculated.</ul> <ul>Trend - Multiple values within the timerange should be calculated taking the calculationTimeRange into account.</ul>",
                    "type": "string",
                    "enum": [
                        "Single",
                        "Trend"
                    ]
                },
                "CalculateJobParams": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "integer",
                            "example": 133051932000000000
                        },
                        "to": {
                            "type": "integer",
                            "example": 133052004000000000
                        },
                        "mode": {
                            "$ref": "#/components/schemas/CalculateJobMode"
                        },
                        "calculationTimeRange": {
                            "type": "number",
                            "nullable": true
                        }
                    }
                },
                "CalculateJobProgress": {
                    "type": "object",
                    "properties": {
                        "doneInMs": {
                            "type": "number"
                        },
                        "maxInMs": {
                            "type": "number"
                        },
                        "doneInPercent": {
                            "type": "number"
                        }
                    }
                },
                "CalculateJobRequest": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "description": "timestamp to start calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00"
                        },
                        "to": {
                            "type": "string",
                            "description": "timestamp to start calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T16:00:00"
                        },
                        "mode": {
                            "$ref": "#/components/schemas/CalculateJobMode"
                        },
                        "calculationTimeRange": {
                            "type": "number",
                            "nullable": true,
                            "example": 1
                        },
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "clientHandle": {
                            "type": "string",
                            "nullable": true
                        },
                        "now": {
                            "type": "string",
                            "description": "optional parameter to overide the current timestamp as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00",
                            "default": ""
                        }
                    }
                },
                "CalculateJobCollectionResult": {
                    "type": "object",
                    "properties": {
                        "jobCollectionId": {
                            "type": "string",
                            "example": "cb8c8cf6dac6428ea31ee1d6d96c1bce"
                        },
                        "result": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/CalculateJobResult"
                            }
                        }
                    }
                },
                "CalculateJobResult": {
                    "type": "object",
                    "properties": {
                        "jobCollectionId": {
                            "type": "string",
                            "example": "cb8c8cf6dac6428ea31ee1d6d96c1bce"
                        },
                        "jobIndex": {
                            "type": "number",
                            "example": 0
                        },
                        "clientHandle": {
                            "type": "string",
                            "nullable": true
                        },
                        "state": {
                            "$ref": "#/components/schemas/CalculateJobState"
                        },
                        "progress": {
                            "$ref": "#/components/schemas/CalculateJobProgress"
                        },
                        "params": {
                            "$ref": "#/components/schemas/CalculateJobParams"
                        },
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "values": {
                            "type": "array",
                            "items": {
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
                                        "format": "integer",
                                        "example": 192
                                    }
                                }
                            },
                            "nullable": true
                        },
                        "error": {
                            "description": "optional error description. If error is set, all values will be null.",
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/Exception"
                                }
                            ]
                        }
                    }
                },
                "CalculateJobState": {
                    "type": "string",
                    "enum": [
                        "Created",
                        "Executing",
                        "Succeeded",
                        "Failed",
                        "Aborted"
                    ]
                },
                "CalculateRequest": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "description": "timestamp to start calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00"
                        },
                        "to": {
                            "type": "string",
                            "description": "timestamp to stop calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T16:00:00"
                        },
                        "dataSources": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DataSourceReference"
                            }
                        },
                        "now": {
                            "type": "string",
                            "description": "optional parameter to overide the current timestamp as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00",
                            "default": ""
                        },
                        "variableConfigurations": {
                            "type": "array",
                            "description": "optional array of variable configurations",
                            "items": {
                                "$ref": "#/components/schemas/VariableConfiguration"
                            }
                        }
                    }
                },
                "CalculateResult": {
                    "type": "object",
                    "properties": {
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "value": {
                            "type": "number",
                            "description": "result for calculate single values.",
                            "example": 2.5
                        },
                        "error": {
                            "description": "optional error description. If error is set, value will be null.",
                            "nullable": true,
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/Exception"
                                }
                            ]
                        }
                    }
                },
                "CalculateTrendRequest": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "description": "timestamp to start calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00"
                        },
                        "to": {
                            "type": "string",
                            "description": "timestamp to stop calculation as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T16:00:00"
                        },
                        "dataSources": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DataSourceReference"
                            }
                        },
                        "calculationTimeRange": {
                            "type": "integer",
                            "description": "The timerange used to calculate one trendpoint. The value is specified in milliseconds.",
                            "example": 1
                        },
                        "now": {
                            "type": "string",
                            "description": "optional parameter to overide the current timestamp as ISO8601 string.",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00",
                            "default": ""
                        },
                        "variableConfigurations": {
                            "type": "array",
                            "description": "optional array of variable configurations",
                            "items": {
                                "$ref": "#/components/schemas/VariableConfiguration"
                            }
                        }
                    }
                },
                "CalculateTrendResult": {
                    "type": "object",
                    "properties": {
                        "dataSource": {
                            "$ref": "#/components/schemas/DataSourceReference"
                        },
                        "values": {
                            "description": "result for calculate trends.",
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "timestamp": {
                                        "type": "string",
                                        "description": "timestamp in ISO8601 string",
                                        "example": "2022-08-16T12:00:00"
                                    },
                                    "value": {
                                        "type": "number",
                                        "example": 2.5
                                    }
                                }
                            }
                        },
                        "error": {
                            "description": "optional error description. If error is set, values will be empty.",
                            "nullable": true,
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/Exception"
                                }
                            ]
                        }
                    }
                },
                "Certificate": {
                    "type": "object",
                    "properties": {
                        "fileName": {
                            "type": "string",
                            "example": "Cert.pem",
                            "description": "name of certificate file"
                        },
                        "content": {
                            "type": "string",
                            "example": "",
                            "description": "content of certificate file"
                        }
                    }
                },
                "ConnectorStateEnum": {
                    "type": "string",
                    "enum": [
                        "available",
                        "good",
                        "bad",
                        "unavailable"
                    ]
                },
                "ConnectionStateEnum": {
                    "type": "string",
                    "enum": [
                        "good",
                        "stopped",
                        "bad"
                    ]
                },
                "ConnectionState": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Name of the connection."
                        },
                        "state": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ConnectionStateEnum"
                                },
                                {
                                    "description": "Current state of the connection."
                                }
                            ]
                        },
                        "reason": {
                            "type": "string",
                            "description": "Reason of the state if available.",
                            "nullable": true
                        },
                        "timestamp": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Timestamp of the state if available.",
                            "nullable": true
                        }
                    }
                },
                "ConnectorState": {
                    "type": "object",
                    "properties": {
                        "state": {
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ConnectorStateEnum"
                                },
                                {
                                    "description": "Current state of the connector."
                                }
                            ]
                        },
                        "reason": {
                            "type": "string",
                            "description": "Reason of the state if available.",
                            "nullable": true
                        },
                        "timestamp": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Timestamp of the state if available.",
                            "nullable": true
                        },
                        "connections": {
                            "type": "array",
                            "description": "Connection specific state information.",
                            "items": {
                                "$ref": "#/components/schemas/ConnectionState"
                            },
                            "nullable": true
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
                "Data": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string",
                            "example": "0dc1963b0db54bc485d76a763315f604"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Value"
                            }
                        },
                        "error": {
                            "description": "optional error description. If error is set, values will be empty.",
                            "nullable": true,
                            "allOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "$ref": "#/components/schemas/Exception"
                                }
                            ]
                        },
                        "lastRequestTime": {
                            "type": "string",
                            "format": "date-time",
                            "example": "2022-08-17T08:01:00.000Z",
                            "description": "only returned for /DataService/Data/Delta path."
                        }
                    }
                },
                "DataDestination": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "readOnly": true,
                            "example": "3c49642087f2459fa705b24fa61a3bb9"
                        },
                        "name": {
                            "type": "string",
                            "example": "wccdev"
                        },
                        "type": {
                            "type": "string",
                            "readOnly": true,
                            "example": "mindsphere",
                            "enum": [
                                "mindsphere"
                            ]
                        },
                        "active": {
                            "type": "boolean",
                            "description": "true, if this data destinations enabled.",
                            "example": true
                        },
                        "config": {
                            "type": "object",
                            "description": "configuration, dependent on data destination type.",
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/MdspDataDestinationConfig"
                                }
                            ]
                        }
                    }
                },
                "DataDestinationSyncState": {
                    "type": "string",
                    "enum": [
                        "NoSync",
                        "Disconnected",
                        "Syncing",
                        "Synced",
                        "Error"
                    ],
                    "description": "Current sync state of DataSync object, only readable in GET calls."
                },
                "MdspDataDestinationConfig": {
                    "type": "object",
                    "properties": {
                        "tenantId": {
                            "type": "string",
                            "example": "wccdev",
                            "description": "tenant of mindsphere"
                        },
                        "clientId": {
                            "type": "string",
                            "example": "ninjatest",
                            "description": "client id of mqtt certificate"
                        },
                        "appId": {
                            "type": "string",
                            "example": "wccdev-pdmcoreservice-1.0",
                            "description": "app id of the app credentials"
                        },
                        "password": {
                            "type": "string",
                            "description": "secret id of the app credentials, required for POST, optional in PUT"
                        },
                        "region": {
                            "type": "string",
                            "example": "EU1",
                            "description": "region of mindsphere"
                        },
                        "connectorCertificate": {
                            "$ref": "#/components/schemas/Certificate"
                        },
                        "connectorKey": {
                            "$ref": "#/components/schemas/Certificate"
                        },
                        "caCertificate": {
                            "$ref": "#/components/schemas/Certificate"
                        },
                        "brokerUrl": {
                            "type": "string",
                            "example": "mindconnectmqtt.eu1.mindsphere.io",
                            "description": "url of mindsphere mqtt broker"
                        },
                        "port": {
                            "type": "number",
                            "example": 8883,
                            "description": "port of mindsphere mqtt broker"
                        },
                        "timeoutInSec": {
                            "type": "number",
                            "example": 1000
                        },
                        "publishIntervalInSec": {
                            "type": "number",
                            "example": 10
                        },
                        "retryCount": {
                            "type": "number",
                            "example": 5
                        },
                        "qos": {
                            "type": "number",
                            "example": 1
                        }
                    }
                },
                "DataResponseArray": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Data"
                            }
                        },
                        "hasMoreData": {
                            "oneOf": [
                                {
                                    "nullable": true
                                },
                                {
                                    "type": "object",
                                    "description": "optional object, which is used if the values for one variable were limited. This has an effect on all other variables.",
                                    "properties": {
                                        "from": {
                                            "type": "string",
                                            "description": "timestamp starting for more data as ISO8601 string.",
                                            "format": "date-time",
                                            "example": "2022-08-16T12:00:00"
                                        },
                                        "to": {
                                            "type": "string",
                                            "description": "to timestamp from request as ISO8601 string.",
                                            "format": "date-time",
                                            "example": "2022-08-16T13:00:00"
                                        }
                                    }
                                }
                            ]
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
                            "$ref": "#/components/schemas/SourceType"
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
                "DataSourceReference": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "3a801b60917e4ca291ff027ba263697e",
                            "description": "Depending on the type could be the id of a Variable or a KPI."
                        },
                        "type": {
                            "$ref": "#/components/schemas/DataSourceType",
                            "example": "Variable"
                        },
                        "aggregation": {
                            "$ref": "#/components/schemas/Aggregation",
                            "example": "Average"
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
                            "example": "dc25bc804b464fdeb9cc9b7c36251fe0"
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
                            "example": "",
                            "readOnly": true
                        },
                        "dataType": {
                            "$ref": "#/components/schemas/DataType"
                        },
                        "path": {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "example": "edge"
                            },
                            "description": "asset path of the datasource, every array element is the next subasset in the parent line of the datasource."
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
                                    "$ref": "#/components/schemas/Exception"
                                },
                                {
                                    "readOnly": true
                                }
                            ]
                        }
                    }
                },
                "DataSourceType": {
                    "type": "string",
                    "enum": [
                        "Variable",
                        "KPI",
                        "Constant",
                        "Consumption",
                        "UnitConsumption",
                        "Costs",
                        "UnitCosts",
                        "CO2Emissions",
                        "UnitCO2Emissions",
                        "UnitCount"
                    ]
                },
                "DataSync": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "readOnly": true,
                            "example": "a4d1778f056248cd9ea93f4529d00fdd"
                        },
                        "sourceId": {
                            "type": "string",
                            "description": "id of the source object",
                            "example": "d0df2a40afd64671bda7b53ce8f08ef8"
                        },
                        "sourceTypeId": {
                            "$ref": "#/components/schemas/SourceType"
                        },
                        "destinationId": {
                            "type": "string",
                            "description": "id of the data destination",
                            "example": "3c49642087f2459fa705b24fa61a3bb9"
                        },
                        "startTime": {
                            "type": "string",
                            "description": "timestamp in ISO8601 string",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00"
                        },
                        "disabled": {
                            "type": "boolean",
                            "default": false,
                            "description": "optional parameter to disable data sync for this object and data destination"
                        },
                        "state": {
                            "$ref": "#/components/schemas/DataDestinationSyncState"
                        }
                    }
                },
                "DataSyncError": {
                    "type": "object",
                    "properties": {
                        "sourceId": {
                            "type": "string",
                            "description": "id of the source object",
                            "example": "d0df2a40afd64671bda7b53ce8f08ef8"
                        },
                        "sourceTypeId": {
                            "$ref": "#/components/schemas/SourceType"
                        },
                        "destinationId": {
                            "type": "string",
                            "description": "id of the data destination",
                            "example": "3c49642087f2459fa705b24fa61a3bb9"
                        },
                        "state": {
                            "$ref": "#/components/schemas/DataDestinationSyncState"
                        },
                        "error": {
                            "$ref": "#/components/schemas/Exception"
                        },
                        "path": {
                            "type": "string",
                            "description": "full path of the object",
                            "example": "edge/TopAsset/SubAsset"
                        }
                    }
                },
                "DataType": {
                    "type": "string",
                    "example": "Double",
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
                        "TimeSpan",
                        "Blob"
                    ],
                    "description": "The type 'String' has currently no size limition.<br>The expected format for the type 'Date' is ISO8601: '2022-02-22T22:00:00.000Z'. The maximum number of decimal places is 7. UTC is always expected.<br>The expected format for the type 'TimeSpan' is a 64-bit signed integer.<br>The expected format for the type 'Blob' is base64 encoded string data."
                },
                "Exception": {
                    "type": "object",
                    "properties": {
                        "service": {
                            "type": "string",
                            "default": "DataService"
                        },
                        "state": {
                            "type": "integer",
                            "enum": [
                                200,
                                204,
                                304,
                                400,
                                401,
                                404,
                                500
                            ],
                            "example": 404
                        },
                        "stateText": {
                            "type": "string",
                            "enum": [
                                "OK",
                                "NoContent",
                                "NotModified",
                                "BadRequest",
                                "Unauthorized",
                                "NotFound",
                                "ServerError"
                            ],
                            "example": "NotFound"
                        },
                        "errorCode": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 57,
                            "example": 4
                        },
                        "errorKey": {
                            "type": "string",
                            "example": "NotFound"
                        },
                        "message": {
                            "type": "string",
                            "example": "The Variable with the id a12c96e4fbda472da3ffe481f06f0adb2 was not found."
                        },
                        "errorParams": {
                            "type": "object",
                            "properties": {
                                "value": {
                                    "type": "string",
                                    "description": "can be any combination of strings."
                                }
                            }
                        },
                        "debugInfo": {
                            "type": "object",
                            "properties": {
                                "value": {
                                    "type": "string",
                                    "description": "can be any combination of strings."
                                }
                            }
                        }
                    }
                },
                "FetchMode": {
                    "type": "string",
                    "description": "Enumeration to specify the behaviour of getting a calculate job collection.<br> <ul>state - Get only the state of the calculate jobs without the results.</ul> <ul>partial - Get the state of the calculate jobs and the results if they are ready.</ul> <ul>all - Get the state of the calculate jobs and the results if all are ready.</ul>",
                    "enum": [
                        "state",
                        "partial",
                        "all"
                    ]
                },
                "Size": {
                    "type": "object",
                    "properties": {
                        "size": {
                            "type": "integer",
                            "example": 238
                        },
                        "formattedSize": {
                            "type": "string",
                            "example": "238.00 Byte"
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
                "SourceType": {
                    "type": "string",
                    "enum": [
                        "asset",
                        "aspect",
                        "variable"
                    ]
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
                "TimeRange": {
                    "type": "object",
                    "properties": {
                        "base": {
                            "$ref": "#/components/schemas/TimeRangeBase"
                        },
                        "factor": {
                            "type": "number",
                            "example": 4
                        }
                    }
                },
                "TimeRangeBase": {
                    "type": "string",
                    "example": "hour",
                    "enum": [
                        "second",
                        "minute",
                        "hour",
                        "day",
                        "week",
                        "month",
                        "quarter",
                        "year"
                    ]
                },
                "TokenInformation": {
                    "type": "object",
                    "properties": {
                        "access_token": {
                            "type": "string",
                            "example": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtleS1pZC0xIn0.eyJzY29wZSI6WyJtZHNwOmNvcmU6YWRtaW4zcmRwYXJ0eXRlY2h1c2VyIl0sImNsaWVudF9pZCI6ImVkZ2VhcHBkYXRhc2VydmljZS1lZGdlIiwiY2lkIjoiZWRnZWFwcGRhdGFzZXJ2aWNlLWVkZ2UiLCJhenAiOiJlZGdlYXBwZGF0YXNlcnZpY2UtZWRnZSIsImdyYW50X3R5cGUiOiJhdXRob3JpemF0aW9uX2NvZGUiLCJ1c2VyX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJvcmlnaW4iOiJlZGdlIiwidXNlcl9uYW1lIjoiVGVjaFVzZXIiLCJlbWFpbCI6IlRlY2hVc2VyLkVkZ2VAU2llbWVucy5jb20iLCJ6aWQiOiJlZGdlIiwidGVuIjoiZWRnZSIsInNjaGVtYXMiOlsidXJuOnNpZW1lbnM6bWluZHNwaGVyZTppYW06djEiXSwiY2F0IjoidXNlci10b2tlbjp2MSIsImF1ZCI6W10sImlzcyI6Imh0dHA6Ly9lZGdlYXBwZGF0YXNlcnZpY2U6NDIwMy9Ub2tlbk1hbmFnZXJTZXJ2aWNlL29hdXRoL3Rva2VuIiwic3ViIjoiZWRnZSIsImp0aSI6ImI1OWRmMGM2Y2Q2MDQ3MzI4ZGIxNGE0YjUxMzUyNDZkIn0.ZmcVb6KcvYPk0w1-UGJPzjF-IPxMVbKOX5kCo47b9ItDVexicUMVuXvoCwN7djFJ6AgSm_tuwpc-gyW-5iPc0DPm-K4Y21hUdpiF6gm3XpaJ6WE05EpAvko5HXShuSnyAITwztplHPWO46kORR2nwRsGShur-Tk12WxhvNXymT65ieG_U6DeaF42DMk730XXBC74de2mL_EuhgRVZT_vyUhYFOsjCtXNIbOfDuCKRtf0QAHIym5UeXl7wP6wobbgVOCW7I-lsqs_HoMnj8tT3x7iYJp5pexV6lK6jZZajs-p2H9pJuz5Sq1V7X5qcwe5D9iOM9vJ8luGHTQR6Dzqow"
                        },
                        "token_type": {
                            "type": "string",
                            "example": "bearer"
                        },
                        "expires_in": {
                            "type": "integer",
                            "example": 1209600
                        },
                        "scope": {
                            "type": "string",
                            "example": "edge"
                        },
                        "jti": {
                            "type": "string",
                            "example": "b59df0c6cd6047328db14a4b5135246d"
                        }
                    }
                },
                "TokenUser": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "00000000000000000000000000000001"
                        },
                        "userName": {
                            "type": "string",
                            "example": "Admin"
                        },
                        "familyName": {
                            "type": "string",
                            "example": "Edge"
                        },
                        "givenName": {
                            "type": "string",
                            "example": "Admin"
                        },
                        "email": {
                            "type": "string",
                            "example": "Admin.Edge@Siemens.com"
                        },
                        "roles": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "application": {
                                        "type": "string",
                                        "example": "edgeappdataservice"
                                    },
                                    "role": {
                                        "type": "string",
                                        "example": "admin",
                                        "enum": [
                                            "admin",
                                            "user"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "TokenIdentityUser": {
                    "type": "object",
                    "properties": {
                        "schemas": {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "example": "urn:scim:schemas:core:1.0"
                            }
                        },
                        "id": {
                            "type": "string",
                            "example": "00000000000000000000000000000001"
                        },
                        "userName": {
                            "type": "string",
                            "example": "Admin.Edge@Siemens.com"
                        },
                        "name": {
                            "type": "object",
                            "properties": {
                                "familyName": {
                                    "type": "string",
                                    "example": "Edge"
                                },
                                "givenName": {
                                    "type": "string",
                                    "example": "Admin"
                                }
                            }
                        },
                        "groups": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "value": {
                                        "type": "string",
                                        "example": ""
                                    },
                                    "display": {
                                        "type": "string",
                                        "example": "mdsp:edge:machinemonitor.admin"
                                    },
                                    "type": {
                                        "type": "string",
                                        "example": "DIRECT"
                                    }
                                }
                            }
                        },
                        "emails": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "value": {
                                        "type": "string",
                                        "example": "Admin.Edge@Siemens.com"
                                    }
                                }
                            }
                        },
                        "active": {
                            "type": "boolean",
                            "example": true
                        }
                    }
                },
                "Value": {
                    "type": "object",
                    "properties": {
                        "timestamp": {
                            "type": "string",
                            "description": "timestamp in ISO8601 string",
                            "format": "date-time",
                            "example": "2022-08-16T12:00:00"
                        },
                        "value": {
                            "oneOf": [
                                {
                                    "type": "number",
                                    "example": 2.5
                                },
                                {
                                    "type": "integer",
                                    "example": 2
                                },
                                {
                                    "type": "boolean",
                                    "example": true
                                },
                                {
                                    "type": "string",
                                    "example": "2"
                                }
                            ],
                            "description": "Is dependent of datatype of the variable definition."
                        },
                        "qualitycode": {
                            "type": "integer",
                            "example": 192,
                            "description": "any unsigned 16-bit integer value. Optional for write calls, 192 will be used as a default.<br>Values will be interpreted according to set bits (Mask 0xC0):<br>0x00 => Quality Bad<br>0x40 => Quality Uncertain<br>0x80 => Quality Good non cascade<br>0xC0 => Quality Good (cascade)"
                        }
                    }
                },
                "Variable": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string",
                            "readOnly": true,
                            "example": "53abb2fdc0da4c24b84b735930c7b9c8"
                        },
                        "variableName": {
                            "type": "string",
                            "example": "Variable1"
                        },
                        "dataType": {
                            "$ref": "#/components/schemas/DataType"
                        },
                        "blobType": {
                            "type": "string",
                            "example": "image/png",
                            "nullable": true,
                            "description": "Intended to describe the content of a variable of type 'Blob'."
                        },
                        "assetId": {
                            "type": "string",
                            "example": "0"
                        },
                        "aspectId": {
                            "type": "string",
                            "nullable": true,
                            "example": "ff857cc22e454a2a88bc36076bc69bdf"
                        },
                        "unit": {
                            "type": "string",
                            "nullable": true,
                            "example": ""
                        },
                        "adapterId": {
                            "type": "string",
                            "nullable": true,
                            "example": "profinet"
                        },
                        "topic": {
                            "type": "string",
                            "nullable": true,
                            "example": "PLC1::Double1::4::7"
                        },
                        "aspectName": {
                            "type": "string",
                            "readOnly": true,
                            "example": "Aspect"
                        },
                        "connected": {
                            "type": "boolean",
                            "readOnly": true,
                            "example": false
                        },
                        "store": {
                            "type": "boolean",
                            "nullable": true,
                            "default": true,
                            "example": true,
                            "description": "This parameter describes if the variable should be subscribed to the adapter to get timeseries data."
                        }
                    }
                },
                "VariableBulkResponse": {
                    "type": "object",
                    "properties": {
                        "results": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Variable"
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/Exception"
                            }
                        }
                    }
                },
                "VariableConfiguration": {
                    "type": "object",
                    "properties": {
                        "variableId": {
                            "type": "string",
                            "example": "3a801b60917e4ca291ff027ba263697e",
                            "nullable": true
                        },
                        "unit": {
                            "type": "string",
                            "example": "",
                            "description": "optional, if not set an empty string will be used."
                        },
                        "isAggregated": {
                            "type": "boolean",
                            "example": false
                        },
                        "acquisitionCategory": {
                            "$ref": "#/components/schemas/AcquisitionCategory"
                        },
                        "acquisitionCycle": {
                            "$ref": "#/components/schemas/TimeRange"
                        },
                        "counterConfigurations": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "validFrom": {
                                        "type": "string",
                                        "example": "2021-12-01T00:00:00Z",
                                        "format": "date-time"
                                    },
                                    "counterConstant": {
                                        "type": "integer",
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
                                        "example": null
                                    },
                                    "rangeEnd": {
                                        "type": "number",
                                        "example": null
                                    },
                                    "valueAtInstallation": {
                                        "type": "number",
                                        "nullable": true,
                                        "example": null
                                    },
                                    "valueAtReplacement": {
                                        "type": "number",
                                        "example": null
                                    }
                                }
                            },
                            "example": []
                        }
                    }
                }
            },
            "examples": {
                "AdapterNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Adapter with the id XXX was not found.",
                        "errorParams": {
                            "id": "XXX",
                            "what": "Adapter"
                        },
                        "debugInfo": {
                            "method": "GET",
                            "route": "/DataService/Adapters/{id}"
                        }
                    }
                },
                "AdapterTypeMqttExample": {
                    "value": {
                        "id": "profinet",
                        "name": "Profinet IO Connector",
                        "type": "simaticadapter",
                        "locked": true,
                        "active": false,
                        "isDefault": false,
                        "canBrowse": true,
                        "connected": false,
                        "config": {
                            "brokerURL": "tcp://ie-databus:1883",
                            "username": "",
                            "browseURL": "ie/m/j/simatic/v1/pnhs1/dp/r"
                        }
                    }
                },
                "AdapterTypeOpenPipeExample": {
                    "value": {
                        "id": "hmiruntime",
                        "name": "HmiRuntime",
                        "type": "hmiruntime",
                        "locked": true,
                        "active": false,
                        "isDefault": false,
                        "canBrowse": false,
                        "connected": false,
                        "config": {
                            "openPipePath": "/tmp/siemens/automation/HmiRuntime"
                        }
                    }
                },
                "AdapterTypeGrpcExample": {
                    "value": {
                        "id": "s7plus",
                        "name": "SIMATIC S7 Plus Connector",
                        "type": "connectivitysuite",
                        "locked": true,
                        "active": false,
                        "isDefault": false,
                        "canBrowse": true,
                        "connected": false,
                        "config": {
                            "appInstanceId": "css7pdriver1"
                        }
                    }
                },
                "AdapterTypeSystemInfoExample": {
                    "value": {
                        "id": "profinet",
                        "name": "Profinet IO Connector",
                        "type": "connectivitysuite",
                        "locked": true,
                        "active": false,
                        "isDefault": false,
                        "canBrowse": true,
                        "connected": false,
                        "config": {}
                    }
                },
                "AggregationExample": {
                    "value": {
                        "id": "8b7e7009e4fa49158d7f287b64be504c",
                        "sourceId": "39e32d19d95846f8b6a1b520893707fc",
                        "sourceDataType": "Double",
                        "aggregation": "Sum",
                        "cycle": {
                            "base": "hour",
                            "factor": 4
                        },
                        "provideAsVariable": true,
                        "publishMqtt": false
                    }
                },
                "AggregationNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Aggregation with the id 87d2ca873ed64220a228010b131353c0 was not found.",
                        "errorParams": {
                            "id": "87d2ca873ed64220a228010b131353c0",
                            "what": "Aggregation"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/Aggregations/{id}"
                        }
                    }
                },
                "AspectWithoutTypeExample": {
                    "value": {
                        "aspectId": "53abb2fdc0da4c24b84b735930c7b9c8",
                        "aspectName": "AspectName",
                        "assetId": "0",
                        "aspectTypeId": null
                    }
                },
                "AspectWithTypeExample": {
                    "value": {
                        "aspectId": "53abb2fdc0da4c24b84b735930c7b9c8",
                        "aspectName": "AspectName",
                        "assetId": "0",
                        "aspectTypeId": "99e92370657c4d689a9a3c76964ab65c"
                    }
                },
                "AspectNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Aspect with the id 099fdb1ca4fd4829a7afdeff7091ee02 was not found.",
                        "errorParams": {
                            "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                            "what": "Aspect"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/Aspects/{id}"
                        }
                    }
                },
                "AspectTypeExample": {
                    "value": {
                        "id": "e1499ca014b248fd956e65ec7cb24f2a",
                        "name": "Turbine",
                        "variables": [
                            {
                                "id": "4ae41b7faaf54d64a6d332f8dccb6a6c",
                                "name": "Speed",
                                "dataType": "Double",
                                "unit": "Hz",
                                "aspectTypeId": "e1499ca014b248fd956e65ec7cb24f2a"
                            }
                        ]
                    }
                },
                "AspectTypeNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The AspectType with the id e1499ca014b248fd956e65ec7cb24f2a was not found.",
                        "errorParams": {
                            "id": "e1499ca014b248fd956e65ec7cb24f2a",
                            "what": "AspectType"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/AspectTypes/{id}"
                        }
                    }
                },
                "AspectBulkResponseExample": {
                    "value": {
                        "results": [
                            {
                                "aspectId": "53abb2fdc0da4c24b84b735930c7b9c8",
                                "aspectName": "AspectName1",
                                "assetId": "0",
                                "aspectTypeId": null
                            }
                        ],
                        "errors": [
                            {
                                "service": "DataService",
                                "state": 404,
                                "stateText": "NotFound",
                                "errorCode": 4,
                                "errorKey": "NotFound",
                                "message": "The Aspect with the id 099fdb1ca4fd4829a7afdeff7091ee02 was not found.",
                                "errorParams": {
                                    "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                                    "what": "Aspect"
                                },
                                "debugInfo": {
                                    "method": "XXX",
                                    "route": "/DataService/Aspects/{id}",
                                    "objectIndex": "1"
                                }
                            }
                        ]
                    }
                },
                "AssetExample": {
                    "value": {
                        "id": "d0df2a40afd64671bda7b53ce8f08ef8",
                        "name": "TopAsset",
                        "parentId": "0",
                        "sortOrder": 0,
                        "hasChildren": false
                    }
                },
                "AssetRootWithChildrenExample": {
                    "value": {
                        "assetId": "0",
                        "name": "edge",
                        "parentId": "",
                        "sortOrder": 0,
                        "hasChildren": true,
                        "children": [
                            {
                                "assetId": "d0df2a40afd64671bda7b53ce8f08ef8",
                                "name": "TopAsset",
                                "parentId": "0",
                                "sortOrder": 0,
                                "hasChildren": false
                            }
                        ]
                    }
                },
                "AssetNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Asset with the id 123 was not found.",
                        "errorParams": {
                            "id": "123",
                            "what": "Asset"
                        },
                        "debugInfo": {
                            "method": "GET",
                            "route": "/AssetService/Assets/{id}"
                        }
                    }
                },
                "AssetBulkResponseExample": {
                    "value": {
                        "results": [
                            {
                                "id": "d0df2a40afd64671bda7b53ce8f08ef8",
                                "name": "AssetName1",
                                "parentId": "0",
                                "sortOrder": 0,
                                "hasChildren": false
                            }
                        ],
                        "errors": [
                            {
                                "service": "DataService",
                                "state": 404,
                                "stateText": "NotFound",
                                "errorCode": 4,
                                "errorKey": "NotFound",
                                "message": "The Asset with the id 099fdb1ca4fd4829a7afdeff7091ee02 was not found.",
                                "errorParams": {
                                    "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                                    "what": "Asset"
                                },
                                "debugInfo": {
                                    "method": "XXX",
                                    "route": "/AssetService/Assets/{id}",
                                    "objectIndex": "1"
                                }
                            }
                        ]
                    }
                },
                "CalculateJobCollectionResultExample": {
                    "value": {
                        "jobCollectionId": "cb8c8cf6dac6428ea31ee1d6d96c1bce",
                        "result": [
                            {
                                "jobCollectionId": "cb8c8cf6dac6428ea31ee1d6d96c1bce",
                                "jobIndex": 0,
                                "clientHandle": "string",
                                "state": "Created",
                                "progress": {
                                    "doneInMs": 0,
                                    "maxInMs": 0,
                                    "doneInPercent": 0
                                },
                                "params": {
                                    "from": 133051932000000000,
                                    "to": 133052004000000000,
                                    "mode": "Single",
                                    "calculationTimeRange": 0
                                },
                                "dataSource": {
                                    "id": "3a801b60917e4ca291ff027ba263697e",
                                    "type": "Variable",
                                    "aggregation": "None"
                                },
                                "values": [
                                    {
                                        "timestamp": "2022-08-17T12:25:04.381Z",
                                        "value": 0,
                                        "qualitycode": 192
                                    }
                                ]
                            }
                        ]
                    }
                },
                "DataDestinationNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The data destination with the id XXX was not found.",
                        "errorParams": {
                            "id": "XXX",
                            "what": "data destination"
                        },
                        "debugInfo": {
                            "method": "GET",
                            "route": "/DataService/DataDestination/{id}"
                        }
                    }
                },
                "DataDestinationMdspExample": {
                    "value": {
                        "id": "3c49642087f2459fa705b24fa61a3bb9",
                        "name": "wccdev",
                        "type": "mindsphere",
                        "active": false,
                        "config": {
                            "tenantId": "wccdev",
                            "clientId": "ninjatest",
                            "region": "EU1",
                            "appId": "wccdev-pdmcoreservice-1.0",
                            "password": "",
                            "connectorCertificate": {
                                "fileName": "ConnectionCertificate.pem",
                                "content": ""
                            },
                            "connectorKey": {
                                "fileName": "ConnectionKey.key",
                                "content": ""
                            },
                            "caCertificate": {
                                "fileName": "MindSphereRootCA1.pem",
                                "content": ""
                            },
                            "brokerUrl": "mindconnectmqtt.eu1.mindsphere.io",
                            "port": 8883,
                            "timeoutInSec": 1000,
                            "publishIntervalInSec": 10,
                            "retryCount": 5,
                            "qos": 1
                        }
                    }
                },
                "DataRetentionExample": {
                    "value": {
                        "sourceId": "0",
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
                "DataRetentionEmptyExample": {
                    "value": {
                        "sourceId": "1",
                        "sourceTypeId": "asset",
                        "settings": {
                            "timeSettings": null
                        }
                    }
                },
                "DataInvalidTimeRangeExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 3,
                        "errorKey": "InvalidParameter",
                        "message": "Parameter to is invalid: Has to be greater than from.",
                        "errorParams": {
                            "reason": "Has to be greater than from.",
                            "what": "to"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/Data/XXX"
                        }
                    }
                },
                "DataNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Variable with the id 1432dae06c5f4008a4caa192cba073a61 was not found.",
                        "errorParams": {
                            "id": "1432dae06c5f4008a4caa192cba073a61",
                            "what": "Variable"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/Data/XXX"
                        }
                    }
                },
                "DataSyncExample": {
                    "value": {
                        "id": "08ff6fd3ba7e4a94887708b22c6fb70b",
                        "sourceId": "d0df2a40afd64671bda7b53ce8f08ef8",
                        "sourceTypeId": "asset",
                        "destinationId": "3c49642087f2459fa705b24fa61a3bb9",
                        "startTime": "2022-08-16T12:00:00",
                        "disabled": false
                    }
                },
                "DataSyncStateExample": {
                    "value": {
                        "id": "08ff6fd3ba7e4a94887708b22c6fb70b",
                        "sourceId": "d0df2a40afd64671bda7b53ce8f08ef8",
                        "sourceTypeId": "asset",
                        "destinationId": "3c49642087f2459fa705b24fa61a3bb9",
                        "startTime": "2022-08-16T12:00:00",
                        "disabled": false,
                        "state": "NoSync"
                    }
                },
                "DataSyncNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The data sync with the id XXX was not found.",
                        "errorParams": {
                            "id": "XXX",
                            "what": "DataSync"
                        },
                        "debugInfo": {
                            "method": "GET",
                            "route": "/DataService/DataSync/{id}"
                        }
                    }
                },
                "ExceptionInvalidParameterExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 3,
                        "errorKey": "InvalidParameter",
                        "message": "Parameter body.### is invalid: Unknown enum value.",
                        "errorParams": {
                            "reason": "Unknown enum value.",
                            "what": "body.###"
                        },
                        "debugInfo": {
                            "method": "###",
                            "route": "###"
                        }
                    },
                    "description": "There was an unknown enum in the body or other invalid parameter reasons are possible."
                },
                "ExceptionMissingParameterExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 2,
                        "errorKey": "MissingParameter",
                        "message": "Parameter body.### is missing.",
                        "errorParams": {
                            "what": "body.###"
                        },
                        "debugInfo": {
                            "method": "###",
                            "route": "###"
                        }
                    }
                },
                "ExceptionInvalidQueryParameterExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 3,
                        "errorKey": "InvalidParameter",
                        "message": "Parameter query.### is invalid: Unknown enum value.",
                        "errorParams": {
                            "reason": "Unknown enum value.",
                            "what": "query.###"
                        },
                        "debugInfo": {
                            "method": "###",
                            "route": "###"
                        }
                    },
                    "description": "There was an unknown enum in the body, other invalid parameter reasons are possible."
                },
                "ExceptionMissingQueryParameterExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 2,
                        "errorKey": "MissingParameter",
                        "message": "Parameter query.### is missing.",
                        "errorParams": {
                            "what": "query.###"
                        },
                        "debugInfo": {
                            "method": "###",
                            "route": "###"
                        }
                    }
                },
                "TooManyFilterExample": {
                    "value": {
                        "service": "DataService",
                        "state": 400,
                        "stateText": "BadRequest",
                        "errorCode": 3,
                        "errorKey": "InvalidParameter",
                        "message": "Parameter query is invalid: It is not supported to specify more than one filter parameter.",
                        "errorParams": {
                            "reason": "It is not supported to specify more than one filter parameter.",
                            "what": "query"
                        },
                        "debugInfo": {
                            "method": "GET",
                            "route": "/DataService/###"
                        }
                    }
                },
                "VariableNotFoundExample": {
                    "value": {
                        "service": "DataService",
                        "state": 404,
                        "stateText": "NotFound",
                        "errorCode": 4,
                        "errorKey": "NotFound",
                        "message": "The Variable with the id 123 was not found.",
                        "errorParams": {
                            "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                            "what": "Variable"
                        },
                        "debugInfo": {
                            "method": "XXX",
                            "route": "/DataService/Variables/{id}"
                        }
                    }
                },
                "VariableBulkResponseExample": {
                    "value": {
                        "results": [
                            {
                                "variableId": "53abb2fdc0da4c24b84b735930c7b9c8",
                                "variableName": "Variable1",
                                "dataType": "Double",
                                "blobType": "image/png",
                                "assetId": "0",
                                "aspectId": "ff857cc22e454a2a88bc36076bc69bdf",
                                "unit": "",
                                "adapterId": "profinet",
                                "topic": "PLC1::Double1::4::7",
                                "aspectName": "Aspect",
                                "connected": false,
                                "store": true
                            }
                        ],
                        "errors": [
                            {
                                "service": "DataService",
                                "state": 404,
                                "stateText": "NotFound",
                                "errorCode": 4,
                                "errorKey": "NotFound",
                                "message": "The Variable with the id 099fdb1ca4fd4829a7afdeff7091ee02 was not found.",
                                "errorParams": {
                                    "id": "099fdb1ca4fd4829a7afdeff7091ee02",
                                    "what": "Variable"
                                },
                                "debugInfo": {
                                    "method": "XXX",
                                    "route": "/DataService/Aspects/{id}",
                                    "objectIndex": "1"
                                }
                            }
                        ]
                    }
                }
            }
        }
    };
}