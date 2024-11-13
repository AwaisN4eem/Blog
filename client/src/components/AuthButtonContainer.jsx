import React from "react";

const AuthButtonContainer = () => {
  return (
    <div className="auth-button-container auth-button-container-wrap panel continuous-top border-2 py-10">
      <div className="text-center font-semibold w-full text-[15px] pb-8">
        We use Submittable to accept and review our submissions.
      </div>
      <div className="w-full flex justify-center items-center">
        <a
          className="btn bg-orange-600 text-white py-2 px-4 rounded-md mx-2"
          href="/signup?returnUrl=%2fsubmit%2f3b229d24-08b0-4351-b425-869d04572870%2funcharted-magazine-novel-excerpt-prize-judged-by-laird-barron-3000-awarded"
        >
          Create Your Account
        </a>
        <a
          className="btn border border-orange-600 text-orange-600 py-2 px-4 rounded-md mx-2"
          href="/login?returnUrl=%2fsubmit%2f3b229d24-08b0-4351-b425-869d04572870%2funcharted-magazine-novel-excerpt-prize-judged-by-laird-barron-3000-awarded"
        >
          Have An Account? Sign In
        </a>
      </div>
    </div>
  );
};

export default AuthButtonContainer;
