import http.server
import socketserver
import os
import sys

PORT = 8000
DIRECTORY = "/Users/tyshchenko/.gemini/antigravity/scratch/pacificfix"

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
        print(f"PacificFix server running on http://localhost:{PORT} and LAN with NO-CACHE headers.")
        sys.stdout.flush()
        httpd.serve_forever()
