define({ "api": [
  {
    "type": "delete",
    "url": "/api/issues/:id",
    "title": "Get all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"message\": \"issue deleted by \" + req.userData.fullName,\n\t      \"userId\": id : string\n\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": `couldn't delete the post`\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issues.js",
    "groupTitle": "read",
    "name": "DeleteApiIssuesId"
  },
  {
    "type": "get",
    "url": "/api/issues",
    "title": "Get all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"message\": \"issues retrieved successfully\",\n\t    \"status\": 200,\n\t    \"issues\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose objectID\n                        },\n\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issues.js",
    "groupTitle": "read",
    "name": "GetApiIssues"
  },
  {
    "type": "get",
    "url": "/api/issues/:id",
    "title": "Get single issue",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"singleIssue\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose objectID\n                        },\n\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issues.js",
    "groupTitle": "read",
    "name": "GetApiIssuesId"
  },
  {
    "type": "post",
    "url": "/api/issues",
    "title": "post all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"message\": \"A new issue created by \" + req.userData.fullName,\n\t    \"status\": 200,\n\t    \"issues\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose object\n                        },\n                        creatorName: string,\n                        id: mongoose.objectID\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issues.js",
    "groupTitle": "read",
    "name": "PostApiIssues"
  },
  {
    "type": "put",
    "url": "/api/issues/:id",
    "title": "update issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"message\": \"issue updated by \" + fullName: string,\n        \"userId\": id: string\n\t    }\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't update the issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issues.js",
    "groupTitle": "read",
    "name": "PutApiIssuesId"
  }
] });
