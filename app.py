import streamlit as st
from pathlib import Path

st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in tüm varsayılan sınırlarını acımasızca sıfırlayan kesin CSS
st.markdown("""
    <style>
        /* Tüm Streamlit kapsayıcılarını ve boşluklarını sıfırla */
        .stApp, .main, .block-container, 
        [data-testid="stAppViewContainer"], 
        [data-testid="stAppViewContainer"] > section,
        [data-testid="stVerticalBlock"] {
            padding: 0rem !important;
            margin: 0rem !important;
            max-width: 100% !important;
            width: 100% !important;
        }
        /* Iframe kapsayıcısını ve iframe'i tam genişlik ve yükseklik yap */
        iframe, [data-testid="stIFrame"] {
            width: 100% !important;
            height: 100vh !important;
            border: none !important;
            display: block !important;
        }
        /* Streamlit üst menüsünü ve footer'ı gizle */
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Iframe'i yükle
html_file_path = Path(__file__).parent / "static" / "index.html"
st.iframe(html_file_path, width='stretch', height=1000)