const express = require("express");

const {
  CreateUser,getAllUser,updateUser,logIn,
  getUserById,
  deleteUser,
  confirmUser,
  forgotPassword,
  resetPassword,
  resendConfirmation,} = require("../Controller/userController");
  const{jwtMiddleware}=require("../middleware/middleware");

const router = express.Router();

router.post("/register", CreateUser);
router.get("/users", getAllUser);
router.patch("/update-user/:id",jwtMiddleware, updateUser);
router.post("/login", logIn);
router.get("/getUser/:id",jwtMiddleware,getUserById);
router.delete("/delete/:id",jwtMiddleware,deleteUser);
router.get("/confirm/:token",confirmUser);
router.post("/forgot-password/",forgotPassword);
router.post("/reset-password/:token",resetPassword);
router.post("/resend-email",resendConfirmation);



module.exports = router;
