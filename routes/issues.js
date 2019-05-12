const express = require("express");

const issueController = require("../controllers/issues");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file-multer");

const router = express.Router();

router.post("", checkAuth, extractFile, issueController.createIssue);
/**
	 * @api {post} /api/issues post all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "message": "A new issue created by " + req.userData.fullName,
	    "status": 200,
	    "issues": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose object
                        },
                        creatorName: string,
                        id: mongoose.objectID
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */

router.get("", checkAuth, issueController.getIssues);

/**
	 * @api {get} /api/issues Get all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "message": "issues retrieved successfully",
	    "status": 200,
	    "issues": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose objectID
                        },

	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */

router.get("/:id", checkAuth, issueController.getSingleIssue);

/**
	 * @api {get} /api/issues/:id Get single issue
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "singleIssue": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose objectID
                        },

	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */

router.put("/:id", checkAuth, extractFile, issueController.updateIssues);

/**
	 * @api {put} /api/issues/:id update issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "message": "issue updated by " + fullName: string,
        "userId": id: string
	    }
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't update the issue",
	    "status": 500,
	    "data": null
	   }
	 */

router.delete("/:id", checkAuth, issueController.deleteIssue);

/**
	 * @api {delete} /api/issues/:id Get all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "message": "issue deleted by " + req.userData.fullName,
	      "userId": id : string

	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": `couldn't delete the post`
	   }
	 */

module.exports = router;
