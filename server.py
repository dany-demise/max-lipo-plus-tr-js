import http.server
import socketserver

PORT = 8001

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Required headers for cross-origin isolation
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
        print(f"Serving on port {PORT} with cross-origin isolation headers...")
        httpd.serve_forever()
