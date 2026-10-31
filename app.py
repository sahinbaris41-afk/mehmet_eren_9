import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Mevcut HTML panelinizi oku
html_path = os.path.join(os.path.dirname(__file__), "panel", "index.html")

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Streamlit içinde tam ekran render et (Düzeltilen Satır)
components.html(html_content, height=900, scrolling=True)