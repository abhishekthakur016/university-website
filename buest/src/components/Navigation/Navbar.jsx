import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";
import Logo from "../../assets/Images/logot.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const eventsItems = [
    { name: "Lakshya", path: "/events/lakshya" },
    { name: "NSS Unit", path: "/events/nss-unit" },
    { name: "Prabandhotsav", path: "/events/prabandhotsav" },
    {
      name: "Inter Department Sports",
      path: "/events/inter-department-sports",
    },
    {
      name: "Convocation",
      path: "/events/convocation",
      subItems: [
        { name: "Convocation 2025", path: "/events/convocation-2025" },
        { name: "Convocation 2024", path: "/events/convocation-2024" },
        { name: "Convocation Alumni", path: "/events/convocation-alumni" },
      ],
    },
    {
      name: "Emanation",
      path: "/events/emanation",
      subItems: [
        { name: "Emanation 2025", path: "/events/emanation-2025" },
        { name: "Emanation 2024", path: "/events/emanation-2024" },
        { name: "Emanation 2019", path: "/events/emanation-2019" },
      ],
    },
    { name: "Women's Day", path: "/events/womens-day" },
    { name: "Yoga Day", path: "/events/yoga-day" },
    { name: "Science Day", path: "/events/science-day" },
  ];

  const noticesItems = [
    { name: "Notice Board", path: "/notices/notice-board" },
    { name: "Grievances", path: "/notices/grievances" },
    { name: "Online Grievance", path: "/notices/online-grievance" },
  ];

  const adminItems = [
    { name: "Careers", path: "/admin/careers" },
    { name: "ERP", path: "/admin/erp" },
    { name: "ERP SOP", path: "/admin/erp-sop" },
    { name: "Easy Fee Installment", path: "/admin/easy-fee-installment" },
  ];

  const alumniItems = [
    { name: "Alumni Portal", path: "/alumni" },
    { name: "Alumni Association", path: "/alumni/association" },
    { name: "Notable Alumni", path: "/alumni/notable-alumni" },
    { name: "Our Team", path: "/alumni/our-team" },
    { name: "Membership Form", path: "/alumni/membership-form" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-3" : "bg-primary py-4"
        }`}
      >
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <Link to="slider" className="flex items-center space-x-9 mr-7 gap-0">
              {/* Logo Image Circle */}
              <div className="w-15 h-20 bg-white rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* University Text */}
              <div className="flex flex-col leading-tight ml-0.5">
                <span
                  className={`text-x font-bold ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  BADDI
                </span>

                <span
                  className={`text-x font-bold ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  UNIVERSITY
                </span>

                <span
                  className={`text-xs ${
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  of emerging sciences <br /> & technology.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10.5  text-l  gap-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === "/"
                    ? "bg-accent text-white"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>

              <Link
                to="/gallery"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === "/gallery"
                    ? "bg-accent text-white"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/activity-updates"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === "/activity-updates"
                    ? "bg-accent text-white"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Update
              </Link>

              <Dropdown
                title="Events"
                items={eventsItems}
                isScrolled={isScrolled}
              />

              <Dropdown
                title="Notices"
                items={noticesItems}
                isScrolled={isScrolled}
              />

              <Dropdown
                title="Admin"
                items={adminItems}
                isScrolled={isScrolled}
              />

              <Dropdown
                title="Alumni"
                items={alumniItems}
                isScrolled={isScrolled}
              />

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-accent text-white"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Contact
              </Link>

              <div className="ml-7 flex items-center gap-1  text-xs  space-x-3 ">
                <Link
                  to="/student-login"
                  className={`px-4 py-1 rounded-md font-medium transition-colors ml-3 ${
                    isScrolled
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "bg-white text-primary hover:bg-gray-100"
                  }`}
                >
                  Student Login
                </Link>
                <Link
                  to="/faculty-login"
                  className={`px-4 py-1 rounded-md font-medium transition-colors ${
                    isScrolled
                      ? "bg-primary text-white hover:bg-primary-light"
                      : "bg-accent text-white hover:bg-accent-dark"
                  }`}
                >
                  Faculty Login
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isScrolled={isScrolled}
        eventsItems={eventsItems}
        noticesItems={noticesItems}
        adminItems={adminItems}
        alumniItems={alumniItems}
      />
    </>
  );
};

export default Navbar;
