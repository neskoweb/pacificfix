import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FormHandlerServlet extends HttpServlet {

    // Метод для обработки POST-запроса
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String message = request.getParameter("message");

        // Обработка данных (например, запись в базу данных или отправка письма)

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Form Submitted Successfully</h2>");
        out.println("<p>Thank you for your submission!</p>");
        out.println("<p><strong>Name:</strong> " + name + "</p>");
        out.println("<p><strong>Email:</strong> " + email + "</p>");
        out.println("<p><strong>Phone:</strong> " + phone + "</p>");
        out.println("<p><strong>Message:</strong> " + message + "</p>");
        out.println("</body></html>");
    }
}
