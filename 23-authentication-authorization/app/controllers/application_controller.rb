class ApplicationController < ActionController::Base
    helper_method :logged_in?

    def logged_in?
        !!session[:teacher_id]
    end

    def current_user
        @teacher = Teacher.find(session[:teacher_id])
    end

    def require_login
        if !logged_in?
          flash[:message] = "PLEASE LOGIN"
          redirect_to login_path
        end
    end
end