class TeachersController < ApplicationController
    def new
        @teacher = Teacher.new
    end

    def create
        byebug
        @teacher = Teacher.new(teacher_params)
        if @teacher.save            
            # cookies[:teacher_id] = @teacher.id
            flash[:login_message] = "Account has been created, please login."
            redirect_to login_path
            # byebug
        else
            render :new
        end
    end

    private
    def teacher_params
        params.require(:teacher).permit(:username, :password, :password_confirmation)
    end
end
