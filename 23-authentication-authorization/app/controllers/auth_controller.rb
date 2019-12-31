class AuthController < ApplicationController
    def login
    end

    def verify
        # byebug
        teacher = Teacher.find_by(username: params[:auth][:username])
        if teacher && teacher.authenticate(params[:auth][:password])
            session[:teacher_id] = teacher.id
            redirect_to :root
        else
            flash[:message] = "Wrong info!!!"
            render :login
        end
    end
end