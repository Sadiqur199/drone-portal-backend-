const getDashboard = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Frontend Connected Successfully 🚀",
      data: {
        droneName: "DJI Agras T40",
        battery: 85,
        status: "Ready",
        totalFlights: 120,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};