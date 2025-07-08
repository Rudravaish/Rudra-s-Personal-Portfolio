#!/usr/bin/env python3
"""
Simple script to run the Streamlit portfolio
"""
import subprocess
import sys

def run_streamlit():
    """Run the Streamlit portfolio application"""
    try:
        print("Starting Streamlit portfolio...")
        print("Open your browser to: http://localhost:8501")
        print("Press Ctrl+C to stop the server")
        
        # Run streamlit
        subprocess.run([
            sys.executable, "-m", "streamlit", "run", "streamlit_portfolio.py",
            "--server.address", "0.0.0.0",
            "--server.port", "8501"
        ])
    except KeyboardInterrupt:
        print("\nStopping Streamlit server...")
    except Exception as e:
        print(f"Error running Streamlit: {e}")

if __name__ == "__main__":
    run_streamlit()